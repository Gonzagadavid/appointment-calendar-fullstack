import axios, { AxiosError, AxiosResponse } from 'axios';

const getTask = async (authorization: string, id: string) => {
  try {
    const headers = { authorization };
    const { data } = await axios.get(`http://localhost:3800/tasks/${id}`, { headers });
    return data;
  } catch (err) {
    const { response } = err as AxiosError;
    const { data } = response as AxiosResponse;
    return data;
  }
};

export default getTask;
