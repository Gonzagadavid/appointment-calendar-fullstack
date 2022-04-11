import axios, { AxiosError, AxiosResponse } from 'axios';
import { UserLogin } from '../../../types';
import { LOGIN } from '../endPoints';

const login = async (user: UserLogin) => {
  try {
    const { data } = await axios.post(LOGIN, user);
    return data;
  } catch (err) {
    const { response } = err as AxiosError;
    const { data } = response as AxiosResponse;
    return data;
  }
};

export default login;
