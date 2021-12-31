import { getLocalStorage, getSessionStorage } from '../services/storage';

const useStorage = () => {
  const local = getLocalStorage('calendar');
  const session = getSessionStorage('calendar');

  return local || session;
};

export default useStorage;
