import { USER_NOT_AUTHORIZED } from '../../errors';
import UserModel from '../../models/UserModel';
import { Login } from '../../types';
import generateToken from '../helpers/generateToken';

const login: Login = async ({ email, password }) => {
  const User = new UserModel();
  const user = await User.findUserByEmail(email);

  if (!user || password !== user.password) throw USER_NOT_AUTHORIZED;

  const { _id } = user;
  const token = generateToken({ _id, email });

  return token;
};

export default login;
