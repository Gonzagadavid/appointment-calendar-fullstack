import {
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  LENGTH_REQUIRED, NOT_ACCEPTABLE,
  NOT_FOUND,
  UNAUTHORIZED,
  UNPROCESSABLE_ENTITY,
} from '../constants/status';

export const INTERNAL_ERROR = {
  message: 'Internal Error',
  status: INTERNAL_SERVER_ERROR,
};

export const REQUIRED_FIELDS = {
  message: 'Required fields are empty',
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

export const USER_NOT_AUTHORIZED = {
  message: 'incorrect email or password',
  status: UNAUTHORIZED,
};

export const UNAUTHORIZED_TOKEN = {
  status: UNAUTHORIZED,
  message: 'jwt malformed',
};

export const MISSING_AUTH_TOKEN = {
  status: UNAUTHORIZED,
  message: 'missing auth token',
};

export const NOT_FOUND_TASK = {
  status: NOT_FOUND,
  message: 'task not found',
};

export const UNAUTHORIZED_USER = {
  status: UNAUTHORIZED,
  message: 'unauthorized user',
};
