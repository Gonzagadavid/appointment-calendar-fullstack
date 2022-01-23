import axios, { AxiosError, AxiosResponse } from 'axios';
import { TaskForm } from '../../../types';

const putTask = async (task: TaskForm, authorization: string, id: string) => {
  try {
    const headers = { authorization };
    const { data, status } = await axios.put(`http://localhost:3800/tasks/${id}`, task, { headers });
    return { ...data, status };
  } catch (err) {
    const { response } = err as AxiosError;
    const { data, status } = response as AxiosResponse;
    return { ...data, status };
  }
};

export default putTask;
