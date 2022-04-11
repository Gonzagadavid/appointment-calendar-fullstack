import axios, { AxiosError, AxiosResponse } from 'axios';
import { SEND_PASSWORD } from '../endPoints';

const sendPassword = async (email: string) => {
  try {
    const { data, status } = await axios.post(SEND_PASSWORD, { email });
    return { ...data, status };
  } catch (err) {
    const { response } = err as AxiosError;
    const { data, status } = response as AxiosResponse;
    return { ...data, status };
  }
};

export default sendPassword;
