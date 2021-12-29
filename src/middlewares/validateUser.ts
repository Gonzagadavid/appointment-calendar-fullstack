import SIX from '../constants/numbers';
import { PASSWORD_LENGTH_REQUIRED, REQUIRED_FIELDS } from '../errors';
import { Handler } from '../types';

const validateUser: Handler = (req, _res, next) => {
  const {
    email, name, lastname, password,
  } = req.body;

  if (!email || !name || !password || !lastname) return next(REQUIRED_FIELDS);

  if (password.length < SIX) return next(PASSWORD_LENGTH_REQUIRED);

  return next();
};

export default validateUser;
