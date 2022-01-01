import axios, { AxiosError, AxiosResponse } from 'axios';
import { User } from '../../../types';

const postUser = async (user: User) => {
  try {
    const { data, status } = await axios.post('http://localhost:3800/users', user);
    return { ...data, status };
  } catch (err) {
    const { response } = err as AxiosError;
    const { data, status } = response as AxiosResponse;
    return { ...data, status };
  }
};

export default postUser;
