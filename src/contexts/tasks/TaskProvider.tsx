import React, {
  PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import filterSelectedTasks from '../../functions/filterSelectedTasks';
import useStorage from '../../hooks/useStorage';
import getAllTasks from '../../services/backend/tasks/getAllTasks';
import getTask from '../../services/backend/tasks/getTask';
import { DefaultState, TaskForm, TaskItem } from '../../types';
import AppContext from '../app/AppContext';
import TaskContext from './TaskContext';
import { CREATED } from '../../constants/status';
import postTask from '../../services/backend/tasks/postTask';

function TaskProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const appContext = useContext(AppContext);
  const {
    connected, selectedDay, selectedMonth, selectedYear, setMessage,
  } = appContext as DefaultState;
  const initialList: TaskItem[] = [];
  const [allTasks, setAllTasks] = useState([]);
  const [tasksSelected, setTasksSelected] = useState(initialList);
  const [idSelected, setIdSelected] = useState('');
  const [taskDetails, setTaskdetails] = useState({});
  const [renderTaskDetails, setRenderTaskDetails] = useState(false);
  const [renderTaskForm, setRenderTaskForm] = useState(false);

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
    return setRenderTaskDetails(true);
  }, [idSelected]);

  const selectDate = useCallback(() => {
    const selectedDate = { selectedDay, selectedMonth, selectedYear };
    const tasks = filterSelectedTasks(selectedDate, allTasks);
    setTasksSelected(tasks);
  }, [selectedDay, selectedMonth, selectedYear, allTasks]);

  const postNewTask = async (task: TaskForm) => {
    const { token } = useStorage('calendar');
    const { status, _id, message } = await postTask(task, token);
    if (status !== CREATED) return setMessage(message);
    setIdSelected(_id);
    await getTasks();
    return setRenderTaskForm(false);
  };

  useEffect(() => { getTasks(); }, [getTasks]);

  useEffect(() => { getTaskById(); }, [getTaskById]);

  useEffect(() => selectDate(), [selectDate]);

  const context = {
    allTasks,
    tasksSelected,
    setIdSelected,
    taskDetails,
    postNewTask,
    renderTaskDetails,
    setRenderTaskDetails,
    renderTaskForm,
    setRenderTaskForm,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <TaskContext.Provider value={contextMemo}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
