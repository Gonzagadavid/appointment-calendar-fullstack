import { OK } from '../../constants/status';
import insertUser from '../../services';
import { Handler } from '../../types';

const postUsers: Handler = async (req, res, next) => {
  try {
    const {
      email, name, lastname, password,
    } = req.body;

    const resp = await insertUser({
      email, name, lastname, password,
    });

    res.status(OK).json(resp);
  } catch (err) {
    next(err);
  }
};
export default postUsers;
