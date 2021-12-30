import { CREATED } from '../../constants/status';
import { insertUser } from '../../services/users';
import { Handler } from '../../types';

const postUsers: Handler = async (req, res, next) => {
  try {
    const {
      email, name, lastname, password,
    } = req.body;

    const resp = await insertUser({
      email, name, lastname, password,
    });

    res.status(CREATED).json(resp);
  } catch (err) {
    next(err);
  }
};
export default postUsers;
