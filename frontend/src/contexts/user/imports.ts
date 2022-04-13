import { CONNECT_FAIL, INVALID_EMAIL, PASSWORD_NOT_CONFIRMED } from '../../constants/messages';
import { CREATED, ACCEPTED } from '../../constants/status';
import { CALENDAR, EMPTY } from '../../constants/strings';
import checkEmail from '../../functions/checkEmail';
import { useInput } from '../../hooks';
import login from '../../services/backend/user/login';
import postUser from '../../services/backend/user/postUser';
import { saveLocalStorage, saveSessinStorage } from '../../services/storage';
import AppContext from '../app/AppContext';
import UserContext from './UserContext';

export {
  CONNECT_FAIL, INVALID_EMAIL, PASSWORD_NOT_CONFIRMED, CREATED, CALENDAR, EMPTY, checkEmail,
  useInput, login, postUser, saveLocalStorage, saveSessinStorage, AppContext, UserContext,
  ACCEPTED,
};
