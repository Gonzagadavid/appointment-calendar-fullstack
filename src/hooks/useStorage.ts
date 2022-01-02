import { getLocalStorage, getSessionStorage } from '../services/storage';

const useStorage = (key: string) => {
  const local = getLocalStorage(key);
  const session = getSessionStorage(key);
  const localLength = Object.keys(local).length;
  const userInfo = localLength ? local : session;
  return userInfo;
};

export default useStorage;
