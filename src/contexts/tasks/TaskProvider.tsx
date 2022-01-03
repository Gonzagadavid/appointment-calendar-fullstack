import React, {
  PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import filterSelectedTasks from '../../functions/filterSelectedTasks';
import useStorage from '../../hooks/useStorage';
import getAllTasks from '../../services/backend/tasks/getAllTasks';
import getTask from '../../services/backend/tasks/getTask';
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
  const [idSelected, setIdSelected] = useState('');
  const [taskDetails, setTaskdetails] = useState({});
  const navigate = useNavigate();

  const getTasks = useCallback(async () => {
    if (!connected) return null;
    const { token } = useStorage('calendar');
    const tasks = await getAllTasks(token);
    return setAllTasks(tasks);
  }, [connected]);

  const getTaskById = useCallback(async () => {
    if (!idSelected) return null;
    const { token } = useStorage('calendar');
    const task = await getTask(token, idSelected);
    setTaskdetails(task);
    return navigate('/task-details');
  }, [idSelected]);

  useEffect(() => { getTasks(); }, [getTasks]);

  useEffect(() => { getTaskById(); }, [getTaskById]);

  useEffect(() => {
    const selectedDate = { selectedDay, selectedMonth, selectedYear };
    const tasks = filterSelectedTasks(selectedDate, allTasks);
    setTasksSelected(tasks);
  }, [selectedDay, selectedMonth, selectedYear, allTasks]);

  const context = {
    allTasks,
    tasksSelected,
    setIdSelected,
    taskDetails,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <TaskContext.Provider value={contextMemo}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
