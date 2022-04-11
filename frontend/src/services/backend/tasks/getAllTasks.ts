import axios, { AxiosError, AxiosResponse } from 'axios';
import { TASKS } from '../endPoints';

const getAllTasks = async (authorization: string) => {
  try {
    const headers = { authorization };
    const { data: { tasks } } = await axios.get(TASKS, { headers });
    return tasks;
  } catch (err) {
    const { response } = err as AxiosError;
    const { data } = response as AxiosResponse;
    return data;
  }
};

export default getAllTasks;
