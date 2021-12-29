import { EMAIL_ALREADY_EXISTS } from '../../errors';
import UserModel from '../../models/UserModel';
import { InsertUser } from '../../types';

const insertUser: InsertUser = async (user) => {
  const User = new UserModel();
  const { email } = user;

  const checkUser = await User.findUserByEmail(user.email);

  if (checkUser) throw EMAIL_ALREADY_EXISTS;

  const { insertedId } = await User.insertOne(user);

  return { _id: insertedId, email };
};

export default insertUser;
