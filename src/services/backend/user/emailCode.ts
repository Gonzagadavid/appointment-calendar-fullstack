import axios, { AxiosError, AxiosResponse } from 'axios';

const emailCode = async (email: string) => {
  try {
    const { data, status } = await axios.post('http://localhost:3800/email', { email });
    return { ...data, status };
  } catch (err) {
    const { response } = err as AxiosError;
    const { data, status } = response as AxiosResponse;
    return { ...data, status };
  }
};

export default emailCode;
