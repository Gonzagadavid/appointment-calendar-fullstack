import { useCallback, useEffect, useState } from 'react';
import { useStorage } from '.';
import { CALENDAR } from '../constants/strings';
import { getAllTasks } from '../services/backend/tasks';

const useAllTasks = (connected: boolean) => {
  const [allTasks, setAllTasks] = useState([]);
  const getTasks = useCallback(async () => {
    if (!connected) return null;
    const { token } = useStorage(CALENDAR);
    const tasks = await getAllTasks(token);
    return setAllTasks(tasks);
  }, [connected]);

  const resetTasks = () => {
    setAllTasks([]);
  };

  useEffect(() => { getTasks(); }, [getTasks]);

  return { allTasks, getTasks, resetTasks };
};

export default useAllTasks;
