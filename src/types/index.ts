import { NextFunction, Request, Response } from 'express';
import { ObjectId } from 'mongodb';

export type Handler = (_req: Request, _res: Response, _next: NextFunction) => void;

export type User = {
  name: string,
  lastname: string,
  email: string,
  password: string
}

export type UserInfo = {
  userId: string,
  email:string
}

export type UserResp = {
  _id: ObjectId,
  email: string,
}

export type UserLogin = {
  email: string,
  password: string
}

export type Task = {
  _id?: ObjectId,
  title: string,
  description: string,
  date: Date,
  status: string,
  userId: ObjectId,
  email: string,
  updated?: Date
}

export type Decode = {
  user: UserInfo
};

declare module 'express' {
  interface Request {
      user?: UserInfo
  }
}

export type InsertUser = (_user: User) => Promise<UserResp>;

export type Login = (_user: UserLogin) => Promise<string>;

export type GenerateToken = (_userCheck: UserResp) => string;

export type InsertTask = (_task: Task) => Promise<Task>;

export type UpdateTask = (_id: string, _task: Task) => Promise<void>;

export type RemoveTask = (_id: string, _userId: string) => Promise<void>;
