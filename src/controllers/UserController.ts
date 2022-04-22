import { NextFunction, Request, Response } from 'express';
import { ACCEPTED, CREATED } from '../constants/status';
import UserService from '../services/UserService';

class UserController {
  private service: UserService;

  constructor(service = new UserService()) {
    this.service = service;
    this.postLogin = this.postLogin.bind(this);
    this.postUsers = this.postUsers.bind(this);
  }

  public async postUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        email, name, lastname, password,
      } = req.body;

      const resp = await this.service.insertUser({
        email, name, lastname, password,
      });

      res.status(CREATED).json(resp);
    } catch (err) {
      next(err);
    }
  }

  public async postLogin(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      const user = await this.service.login({ email, password });

      res.status(ACCEPTED).json(user);
    } catch (err) {
      next(err);
    }
  }
}

export default UserController;
