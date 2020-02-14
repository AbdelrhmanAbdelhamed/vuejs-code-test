import axios from 'axios';
import nprogress from 'nprogress';

import store from '@/store';
import router from '@/router';

import { camelcaseKeys, snakecaseKeys } from '@/utils';

function isContainsJsonContentType(headers) {
  const jsonContentTypes = [
    headers['content-type'] ? headers['content-type'] : '',
    headers.common && headers.common.Accept ? headers.common.Accept : '',
  ];
  return jsonContentTypes.some((contentType) => contentType.includes('application/json'));
}

export function setAuthorizationHeader(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export function clearAuthorizationHeader() {
  delete axios.defaults.headers.common.Authorization;
}

const token = localStorage.getItem('token');
if (token) {
  setAuthorizationHeader(token);
}

const http = axios.create({
  timeout: 5000,
  baseURL: process.env.VUE_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // eslint-disable-next-line consistent-return
  transformRequest: [(data, headers) => {
    if (data && isContainsJsonContentType(headers)) {
      return JSON.stringify(snakecaseKeys(data, { deep: true }));
    }
  }],
  // eslint-disable-next-line consistent-return
  transformResponse: [(data, headers) => {
    if (data && isContainsJsonContentType(headers)) {
      return camelcaseKeys(JSON.parse(data), { deep: true });
    }
  }],

});

http.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.params = config.params ? snakecaseKeys(config.params) : config.params;
  nprogress.start();
  return config;
});

http.interceptors.response.use(
  (response) => {
    nprogress.done();
    return response;
  },
  async (error) => {
    const logoutResponseStatuses = [400, 401, 403];
    if (logoutResponseStatuses.some((responseStatus) => responseStatus === error.response.status)) {
      if (router.currentRoute.path !== '/login') {
        await store.dispatch('auth/logout');
        router.replace('/login');
      }
    }
    nprogress.done();
    throw error;
  },
);

export default http;
