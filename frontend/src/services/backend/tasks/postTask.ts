import axios, { AxiosError, AxiosResponse } from 'axios';
import { TaskForm } from '../../../types';
import { TASKS } from '../endPoints';

const postTask = async (task: TaskForm, authorization: string) => {
  try {
    const headers = { authorization };
    const { data, status } = await axios.post(TASKS, task, { headers });
    return { ...data, status };
  } catch (err) {
    const { response } = err as AxiosError;
    const { data, status } = response as AxiosResponse;
    return { ...data, status };
  }
};

export default postTask;
