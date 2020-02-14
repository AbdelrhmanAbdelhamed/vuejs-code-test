import UserRepository from './UserRepository';
import AuthRepository from './AuthRepository';

const repositories = {
  users: UserRepository,
  auth: AuthRepository,
};
export default {
  get: (name) => repositories[name],
};
