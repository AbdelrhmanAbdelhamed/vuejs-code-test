import client from '../clients/httpClient';

const endPoint = '/users';

export default {
  create(user) {
    return client.post(`${endPoint}`, user).then((response) => response.data);
  },
  read(params = {}) {
    return client.get(`${endPoint}`, { params }).then((response) => response.data);
  },
  update(user) {
    return client.put(`${endPoint}/${user.id}`, user).then((response) => response.data);
  },
  delete(id) {
    return client.delete(`${endPoint}/${id}`).then((response) => response.data);
  },

};
