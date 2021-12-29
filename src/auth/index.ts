import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { UNAUTHORIZED_TOKEN, MISSING_AUTH_TOKEN, INTERNAL_ERROR } from '../errors';
import { Decode, Handler } from '../types';
import ERROR from '../constants/strings';

const authToken: Handler = (req, res, next) => {
  const { authorization: token } = req.headers;

  dotenv.config();

  const secret: Secret = process.env.SECRET || ERROR;

  if (secret === ERROR) return next(INTERNAL_ERROR);

  if (!token) return next(MISSING_AUTH_TOKEN);

  try {
    const { user } = jwt.verify(token, secret) as Decode;

    if (!user) return next(MISSING_AUTH_TOKEN);

    req.user = user;

    return next();
  } catch (err) {
    return next(UNAUTHORIZED_TOKEN);
  }
};

export default authToken;
