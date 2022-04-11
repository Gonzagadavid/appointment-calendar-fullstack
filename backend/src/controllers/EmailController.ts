import { NextFunction, Request, Response } from 'express';
import { ACCEPTED } from '../constants/status';
import EmailService from '../services/EmailService';

class EmailController {
  private service: EmailService;

  constructor() {
    this.service = new EmailService();
    this.postCode = this.postCode.bind(this);
    this.postPassword = this.postPassword.bind(this);
  }

  public postCode(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      const code = this.service.emailCode(email);

      res.status(ACCEPTED).json({ code });
    } catch (err) {
      next(err);
    }
  }

  public async postPassword(req: Request, res: Response, next: NextFunction) {
    try {
      const { email } = req.body;
      const message = await this.service.sendPassword(email);

      res.status(ACCEPTED).json({ message });
    } catch (err) {
      next(err);
    }
  }
}

export default EmailController;
