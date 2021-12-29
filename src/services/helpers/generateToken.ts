import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { GenerateToken } from '../../types';

const generateToken: GenerateToken = (userCheck) => {
  dotenv.config();
  const secret: Secret = process.env.SECRET || 'error';
  const { _id, email } = userCheck;
  const jwtConfig: SignOptions = { algorithm: 'HS256' };
  const user = { id: _id, email };

  const token = jwt.sign({ user }, secret, jwtConfig);

  return token;
};

export default generateToken;
