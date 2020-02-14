import client from '../clients/httpClient';

const endPoint = '/login';

export default {
  login(userData) {
    return client.post(`${endPoint}`, userData).then((response) => response.data);
  },
};
