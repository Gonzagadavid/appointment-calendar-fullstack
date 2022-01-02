import axios, { AxiosError, AxiosResponse } from 'axios';

const getAllTasks = async (authorization: string) => {
  try {
    const headers = { authorization };
    const { data: { tasks } } = await axios.get('http://localhost:3800/tasks', { headers });
    return tasks;
  } catch (err) {
    const { response } = err as AxiosError;
    const { data } = response as AxiosResponse;
    return data;
  }
};

export default getAllTasks;
