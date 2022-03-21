import { EMAIL_SUCCESSFULLY } from '../../constants/strings';
import { UNREGISTERED_EMAIL } from '../../errors';
import UserModel from '../../models/UserModel';
import htmlPassword from '../helpers/htmlPassword';
import mail from '../helpers/mail';

const User = new UserModel();

const sendPassword = async (email: string) => {
  const user = await User.findUserByEmail(email);

  if (!user) throw UNREGISTERED_EMAIL;

  const { password } = user;

  const message = htmlPassword(password);

  await mail(email, message);

  return EMAIL_SUCCESSFULLY(email);
};

export default sendPassword;
