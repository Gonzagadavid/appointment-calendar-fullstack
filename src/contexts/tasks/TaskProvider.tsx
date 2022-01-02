import React, {
  PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import filterSelectedTasks from '../../functions/filterSelectedTasks';
import useStorage from '../../hooks/useStorage';
import getAllTasks from '../../services/backend/tasks/getAllTasks';
import { DefaultState, TaskItem } from '../../types';
import AppContext from '../app/AppContext';
import TaskContext from './TaskContext';

function TaskProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const appContext = useContext(AppContext);
  const {
    connected, selectedDay, selectedMonth, selectedYear,
  } = appContext as DefaultState;
  const initialList: TaskItem[] = [];
  const [allTasks, setAllTasks] = useState([]);
  const [tasksSelected, setTasksSelected] = useState(initialList);

  const getTasks = useCallback(async () => {
    if (!connected) return null;
    const { token } = useStorage('calendar');
    const tasks = await getAllTasks(token);
    return setAllTasks(tasks);
  }, [connected]);

  useEffect(() => { getTasks(); }, [getTasks]);

  useEffect(() => {
    const selectedDate = { selectedDay, selectedMonth, selectedYear };
    const tasks = filterSelectedTasks(selectedDate, allTasks);
    setTasksSelected(tasks);
  }, [selectedDay, selectedMonth, selectedYear, allTasks]);

  const context = {
    allTasks,
    tasksSelected,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <TaskContext.Provider value={contextMemo}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
