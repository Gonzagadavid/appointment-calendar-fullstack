import { ACCEPTED } from '../../constants/status';
import emailCode from '../../services/email/emailCode';
import { Handler } from '../../types';

const postCode: Handler = async (req, res, next) => {
  try {
    const { email } = req.body;
    const code = await emailCode(email);

    res.status(ACCEPTED).json(code);
  } catch (err) {
    next(err);
  }
};
export default postCode;
