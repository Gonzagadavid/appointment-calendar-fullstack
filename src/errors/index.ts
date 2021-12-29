import {
  CONFLICT, LENGTH_REQUIRED, NOT_ACCEPTABLE, UNPROCESSABLE_ENTITY,
} from '../constants/status';

export const INTERNAL_ERROR = 'Internal Error';

export const REQUIRED_FIELDS = {
  message: 'The email, name, lastname and password fields are mandatory',
  status: UNPROCESSABLE_ENTITY,
};

export const PASSWORD_LENGTH_REQUIRED = {
  message: 'the password must have a minimum length of 6 characters',
  status: LENGTH_REQUIRED,
};

export const INVALID_EMAIL = {
  message: 'invalid email format',
  status: NOT_ACCEPTABLE,
};

export const EMAIL_ALREADY_EXISTS = {
  message: 'email already exists',
  status: CONFLICT,
};
