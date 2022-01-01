import { ACCEPTED } from '../../constants/status';
import { login } from '../../services/users';
import { Handler } from '../../types';

const postLogin: Handler = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await login({ email, password });

    res.status(ACCEPTED).json(user);
  } catch (err) {
    next(err);
  }
};
export default postLogin;
