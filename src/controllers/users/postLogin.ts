import { ACCEPTED } from '../../constants/status';
import { login } from '../../services/users';
import { Handler } from '../../types';

const postLogin: Handler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await login({ email, password });

    res.status(ACCEPTED).json({ token });
  } catch (err) {
    next(err);
  }
};
export default postLogin;
