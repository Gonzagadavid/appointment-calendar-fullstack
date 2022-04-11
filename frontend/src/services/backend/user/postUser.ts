import axios, { AxiosError, AxiosResponse } from 'axios';
import { User } from '../../../types';
import { POST_USER } from '../endPoints';

const postUser = async (user: User) => {
  try {
    const { data, status } = await axios.post(POST_USER, user);
    return { ...data, status };
  } catch (err) {
    const { response } = err as AxiosError;
    const { data, status } = response as AxiosResponse;
    return { ...data, status };
  }
};

export default postUser;
