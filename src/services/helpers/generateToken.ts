import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { GenerateToken } from '../../types';
import ERROR from '../../constants/string';
import { INTERNAL_ERROR } from '../../errors';

const generateToken: GenerateToken = (userCheck) => {
  dotenv.config();
  const secret: Secret = process.env.SECRET || ERROR;

  if (secret === ERROR) throw INTERNAL_ERROR;

  const { _id, email } = userCheck;
  const jwtConfig: SignOptions = { algorithm: 'HS256' };
  const user = { _id, email };

  const token = jwt.sign({ user }, secret, jwtConfig);

  return token;
};

export default generateToken;
