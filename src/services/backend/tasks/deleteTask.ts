import axios, { AxiosError, AxiosResponse } from 'axios';

const deleteTask = async (id: string, authorization: string) => {
  try {
    const headers = { authorization };
    const { data, status } = await axios.delete(`http://localhost:3800/tasks/${id}`, { headers });
    return { ...data, status };
  } catch (err) {
    const { response } = err as AxiosError;
    const { data, status } = response as AxiosResponse;
    return { ...data, status };
  }
};

export default deleteTask;
