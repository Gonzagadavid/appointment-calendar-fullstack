import { INVALID_EMAIL } from '../errors';
import { Handler } from '../types';

const validateEmail: Handler = (req, _res, next) => {
  const { email } = req.body;

  const emailRegexp = /^[a-z_.]+@[a-z]+\.[a-z]+(\.[a-z]{2})?$/;

  if (!emailRegexp.test(email)) return next(INVALID_EMAIL);

  return next();
};
export default validateEmail;
