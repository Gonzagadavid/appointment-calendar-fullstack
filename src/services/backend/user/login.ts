import axios, { AxiosError, AxiosResponse } from 'axios';
import { UserLogin } from '../../../types';

const login = async (user: UserLogin) => {
  try {
    const { data } = await axios.post('http://localhost:3800/users/login', user);
    return data;
  } catch (err) {
    const { response } = err as AxiosError;
    const { data } = response as AxiosResponse;
    return data;
  }
};

export default login;
