import { USER_NOT_AUTHORIZED } from '../../errors';
import UserModel from '../../models/UserModel';
import { Login, UserInserted } from '../../types';
import generateToken from '../helpers/generateToken';

const login: Login = async ({ email, password }) => {
  const User = new UserModel();
  const user = await User.findUserByEmail(email);

  if (!user || password !== user.password) throw USER_NOT_AUTHORIZED;

  const { _id, name, lastname } = user as UserInserted;

  const userName = `${name} ${lastname}`;

  const token = generateToken({ _id, email });

  return { token, userName };
};

export default login;
