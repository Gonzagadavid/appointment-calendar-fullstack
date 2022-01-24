import { ACCEPTED } from '../../constants/status';
import sendPassword from '../../services/email/sendPassword';
import { Handler } from '../../types';

const postPassword: Handler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const password = await sendPassword(email);

    res.status(ACCEPTED).json(password);
  } catch (err) {
    next(err);
  }
};
export default postPassword;
