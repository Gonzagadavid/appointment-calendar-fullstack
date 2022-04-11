import axios, { AxiosError, AxiosResponse } from 'axios';
import { TASK_BY_ID } from '../endPoints';

const getTask = async (authorization: string, id: string) => {
  try {
    const headers = { authorization };
    const { data } = await axios.get(TASK_BY_ID(id), { headers });
    return data;
  } catch (err) {
    const { response } = err as AxiosError;
    const { data } = response as AxiosResponse;
    return data;
  }
};

export default getTask;
