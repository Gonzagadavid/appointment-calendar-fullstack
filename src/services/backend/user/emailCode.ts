import axios, { AxiosError, AxiosResponse } from 'axios';
import { EMAIL_CODE } from '../endPoints';

const emailCode = async (email: string) => {
  try {
    const { data, status } = await axios.post(EMAIL_CODE, { email });
    return { ...data, status };
  } catch (err) {
    const { response } = err as AxiosError;
    const { data, status } = response as AxiosResponse;
    return { ...data, status };
  }
};

export default emailCode;
