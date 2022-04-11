import { REQUIRED_FIELDS } from '../errors';
import { Handler } from '../types';

const validateUser: Handler = (req, _res, next) => {
  const { name, lastname } = req.body;

  if (!name || !lastname) return next(REQUIRED_FIELDS);

  return next();
};

export default validateUser;
