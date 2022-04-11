import { getLocalStorage, getSessionStorage } from '../services/storage';

const checkLogin = () => {
  const local = getLocalStorage('calendar');
  const session = getSessionStorage('calendar');
  const storageObject = { ...local, ...session };
  const list = Object.keys(storageObject);
  return !!list.length;
};

export default checkLogin;
