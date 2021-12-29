import SIX from '../constants/numbers';
import { PASSWORD_LENGTH_REQUIRED, REQUIRED_FIELDS } from '../errors';
import { Handler } from '../types';

const validatePassword: Handler = (req, _res, next) => {
  const {
    email, password,
  } = req.body;

  if (!email || !password) return next(REQUIRED_FIELDS);

  if (password.length < SIX) return next(PASSWORD_LENGTH_REQUIRED);

  return next();
};

export default validatePassword;
