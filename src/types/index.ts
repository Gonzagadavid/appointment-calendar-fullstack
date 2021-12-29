import { NextFunction, Request, Response } from 'express';
import { ObjectId } from 'mongodb';

export type Handler = (_req: Request, _res: Response, _next: NextFunction) => void;

export type User = {
  name: string,
  lastname: string,
  email: string,
  password?: string
}

export type UserResp = {
  _id: ObjectId,
  email: string,
}

export type InsertUser = (_user: User) => Promise<UserResp>;
