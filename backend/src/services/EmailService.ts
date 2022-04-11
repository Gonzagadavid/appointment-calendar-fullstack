import { config } from 'dotenv';
import nodemailer from 'nodemailer';
import { FOUR } from '../constants/numbers';
import { ACCESS_CODE, EMAIL_SUCCESSFULLY, GMAIL } from '../constants/strings';
import { EMAIL_NOT_ACCESSIBLE, UNREGISTERED_EMAIL } from '../errors';
import UserModel from '../models/UserModel';
import generateCode from './helpers/generateCode';
import htmlCode from './helpers/htmlCode';
import htmlPassword from './helpers/htmlPassword';

config();

const { EMAIL, PASSWORD } = process.env;

class EmailService {
  private model: UserModel;

  private email?: string;

  private password?: string;

  constructor() {
    this.model = new UserModel();
    this.email = EMAIL;
    this.password = PASSWORD;
  }

  private mail(recipient: string, message: string) {
    const mailTransporter = nodemailer.createTransport({
      service: GMAIL,
      auth: {
        user: this.email,
        pass: this.password,
      },
    });

    const mailDetails = {
      from: this.email,
      to: recipient,
      subject: ACCESS_CODE,
      html: message,
    };

    mailTransporter.sendMail(mailDetails, (err, _data) => {
      if (err) throw EMAIL_NOT_ACCESSIBLE;

      return EMAIL_SUCCESSFULLY;
    });
  }

  public emailCode(email: string) {
    const code = generateCode(FOUR);
    const message = htmlCode(code);
    this.mail(email, message);

    return code;
  }

  public async sendPassword(email: string) {
    const user = await this.model.findUserByEmail(email);

    if (!user) throw UNREGISTERED_EMAIL;

    const { password } = user;

    const message = htmlPassword(password);

    this.mail(email, message);

    return EMAIL_SUCCESSFULLY(email);
  }
}

export default EmailService;
