import Repository from '@/api/repositories/RepositoryFactory';

import { setAuthorizationHeader, clearAuthorizationHeader } from '@/api/clients/httpClient';

import { SET_TOKEN } from '../mutation-types';

const AuthRepository = Repository.get('auth');

export default {
  state: {
    token: localStorage.getItem('token') || '',
  },
  getters: {
    loggedIn(state) {
      return !!state.token;
    },
  },
  mutations: {

    [SET_TOKEN](state, response) {
      const { token } = response;
      state.token = token;
    },
  },
  actions: {
    async login({ commit }, userData) {
      const response = await AuthRepository.login(userData);
      commit(SET_TOKEN, response);
      setAuthorizationHeader(response.token);
      localStorage.setItem('token', response.token);
    },
    async logout({ commit }) {
      commit(SET_TOKEN, { token: null });
      clearAuthorizationHeader();
      localStorage.removeItem('token');
    },
  },
};
