import axios, { AxiosError, AxiosResponse } from 'axios';
import { TASK_BY_ID } from '../endPoints';

const deleteTask = async (id: string, authorization: string) => {
  try {
    const headers = { authorization };
    const { data, status } = await axios.delete(TASK_BY_ID(id), { headers });
    return { ...data, status };
  } catch (err) {
    const { response } = err as AxiosError;
    const { data, status } = response as AxiosResponse;
    return { ...data, status };
  }
};

export default deleteTask;
