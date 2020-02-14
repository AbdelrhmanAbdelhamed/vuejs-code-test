import Repository from '@/api/repositories/RepositoryFactory';

import User from '@/models/User';

import {
  SET_USERS,
  ADD_USER,
  UPDATE_USER,
  REMOVE_USER,
  SET_PAGINATION,
} from '../mutation-types';


const UserRepository = Repository.get('users');

export default {
  state: () => ({
    users: [],
    usersPagination: {
      page: 1,
      perPage: 5,
      total: 0,
      totalPages: 0,
    },
  }),
  mutations: {
    [ADD_USER](state, user) {
      state.users = [...state.users, user];
    },
    [SET_USERS](state, response) {
      const { data: users } = response;
      state.users = users.map((user) => new User({
        ...user,
      }));
    },
    [UPDATE_USER](state, updatedUser) {
      state.users = [
        ...state.users.map((user) => (
          user.id !== updatedUser.id
            ? user
            : { ...user, ...updatedUser })),
      ];
    },
    [REMOVE_USER](state, id) {
      state.users = [
        ...state.users.filter((user) => user.id !== id),
      ];
    },
    [SET_PAGINATION](state, response) {
      const usersPagination = {};
      ({
        page: usersPagination.page,
        perPage: usersPagination.perPage,
        total: usersPagination.total,
        totalPages: usersPagination.totalPages,
      } = response);
      state.usersPagination = usersPagination;
    },
  },
  actions: {
    async createUser({ commit }, user) {
      commit(ADD_USER, await UserRepository.create(user));
    },
    async readUsers(_, params) {
      const response = await UserRepository.read(params);
      return response;
    },
    async updateUser({ commit }, user) {
      commit(UPDATE_USER, await UserRepository.update(user));
    },
    async deleteUser({ commit }, id) {
      await UserRepository.delete(id);
      commit(REMOVE_USER, id);
    },
  },
};
