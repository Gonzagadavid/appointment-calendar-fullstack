import dotenv from 'dotenv';

import nodemailer from 'nodemailer';
import { ACCESS_CODE, EMAIL_SUCCESSFULLY, GMAIL } from '../../constants/strings';
import { EMAIL_NOT_ACCESSIBLE } from '../../errors';

dotenv.config();

const mail = (recipient: string, message: string) => {
  const mailTransporter = nodemailer.createTransport({
    service: GMAIL,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailDetails = {
    from: process.env.EMAIL,
    to: recipient,
    subject: ACCESS_CODE,
    html: message,
  };

  mailTransporter.sendMail(mailDetails, (err, _data) => {
    if (err) throw EMAIL_NOT_ACCESSIBLE;

    return EMAIL_SUCCESSFULLY;
  });
};

export default mail;
