import axios, { AxiosError, AxiosResponse } from 'axios';
import { TaskForm } from '../../../types';
import { TASK_BY_ID } from '../endPoints';

const putTask = async (task: TaskForm, authorization: string, id: string) => {
  try {
    const headers = { authorization };
    const { data, status } = await axios.put(TASK_BY_ID(id), task, { headers });
    return { ...data, status };
  } catch (err) {
    const { response } = err as AxiosError;
    const { data, status } = response as AxiosResponse;
    return { ...data, status };
  }
};

export default putTask;
