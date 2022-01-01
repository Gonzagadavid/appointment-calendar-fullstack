import { USER_CREATED } from '../../constants/strings';
import { EMAIL_ALREADY_EXISTS } from '../../errors';
import UserModel from '../../models/UserModel';
import { InsertUser } from '../../types';

const insertUser: InsertUser = async (user) => {
  const User = new UserModel();
  const { email } = user;

  const checkUser = await User.findUserByEmail(email);

  if (checkUser) throw EMAIL_ALREADY_EXISTS;

  await User.insertOne(user);

  return { message: USER_CREATED };
};

export default insertUser;
