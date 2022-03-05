import { CONNECT_FAIL, INVALID_EMAIL, PASSWORD_NOT_CONFIRMED } from '../../constants/messages';
import { CREATED } from '../../constants/status';
import { CALENDAR, EMPTY } from '../../constants/strings';
import checkEmail from '../../functions/checkEmail';
import useInput from '../../hooks/useInput';
import login from '../../services/backend/user/login';
import postUser from '../../services/backend/user/postUser';
import saveLocalStorage from '../../services/storage/saveLocalStorage';
import saveSessinStorage from '../../services/storage/saveSessionStorage';
import AppContext from '../app/AppContext';
import UserContext from './UserContext';

export {
  CONNECT_FAIL, INVALID_EMAIL, PASSWORD_NOT_CONFIRMED, CREATED, CALENDAR, EMPTY, checkEmail,
  useInput, login, postUser, saveLocalStorage, saveSessinStorage, AppContext, UserContext,
};
