import { REQUIRED_FIELDS } from '../errors';
import { Handler } from '../types';

const validateTask: Handler = (req, res, next) => {
  const {
    title, description, status, date,
  } = req.body;

  if (!title || !description || !status || !date) return next(REQUIRED_FIELDS);

  return next();
};

export default validateTask;
