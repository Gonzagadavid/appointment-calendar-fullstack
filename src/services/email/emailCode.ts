import { FOUR } from '../../constants/numbers';
import generateCode from '../helpers/generateCode';
import htmlCode from '../helpers/htmlCode';
import mail from '../helpers/mail';

const emailCode = async (email: string) => {
  const code = generateCode(FOUR);
  const message = htmlCode(code);
  mail(email, message);

  return code;
};

export default emailCode;
