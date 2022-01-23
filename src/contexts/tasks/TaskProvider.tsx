import React, {
  PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import filterSelectedTasks from '../../functions/filterSelectedTasks';
import useStorage from '../../hooks/useStorage';
import getAllTasks from '../../services/backend/tasks/getAllTasks';
import getTask from '../../services/backend/tasks/getTask';
import {
  DefaultState, TaskDetailsType, TaskForm, TaskItem,
} from '../../types';
import AppContext from '../app/AppContext';
import TaskContext from './TaskContext';
import { CREATED } from '../../constants/status';
import postTask from '../../services/backend/tasks/postTask';
import { CALENDAR, EMPTY } from '../../constants/strings';
import useInput from '../../hooks/useInput';
import { timeCrr } from '../../constants/currentDate';
import putTask from '../../services/backend/tasks/putTask';
import deleteTask from '../../services/backend/tasks/deleteTask';

function TaskProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const appContext = useContext(AppContext);
  const {
    connected, selectedDay, selectedMonth, selectedYear, setMessage,
  } = appContext as DefaultState;
  const initialList: TaskItem[] = [];
  const [allTasks, setAllTasks] = useState([]);
  const [tasksSelected, setTasksSelected] = useState(initialList);
  const [idSelected, setIdSelected] = useState(EMPTY);
  const [taskDetails, setTaskdetails] = useState({});
  const [edit, setEdit] = useState(false);
  const [renderTaskDetails, setRenderTaskDetails] = useState(false);
  const [renderTaskForm, setRenderTaskForm] = useState(false);
  const { state: title, setState: setTitle, resetState: resetTitle } = useInput(EMPTY);
  const { state: description, setState: setDescription, resetState: resetDesc } = useInput(EMPTY);
  const { state: time, setState: setTime, resetState: resetTime } = useInput(timeCrr);
  const { state: status, setState: setStatus, resetState: resetStatus } = useInput('Programmed');

  const getTasks = useCallback(async () => {
    if (!connected) return null;
    const { token } = useStorage(CALENDAR);
    const tasks = await getAllTasks(token);
    return setAllTasks(tasks);
  }, [connected]);

  const getTaskById = useCallback(async () => {
    if (!idSelected) return null;
    const { token } = useStorage(CALENDAR);
    const task = await getTask(token, idSelected);
    setTaskdetails(task);
    return setRenderTaskDetails(true);
  }, [idSelected]);

  const selectDate = useCallback(() => {
    const selectedDate = { selectedDay, selectedMonth, selectedYear };
    const tasks = filterSelectedTasks(selectedDate, allTasks);
    setTasksSelected(tasks);
  }, [selectedDay, selectedMonth, selectedYear, allTasks]);

  const editTask = () => {
    const {
      title: titleDetails, description: descripDetails, date: dateDetails, status: statusDetails,
    } = taskDetails as TaskDetailsType;
    const timeDetails = new Date(dateDetails).toLocaleTimeString([], { timeStyle: 'short' });
    resetTitle(titleDetails);
    resetDesc(descripDetails);
    resetTime(timeDetails);
    resetStatus(statusDetails);
    setRenderTaskDetails(false);
    setRenderTaskForm(true);
    setEdit(true);
  };

  const postNewTask = async (task: TaskForm) => {
    const { token } = useStorage(CALENDAR);
    const { status: respStatus, _id, message } = await postTask(task, token);
    if (respStatus !== CREATED) return setMessage(message);
    setIdSelected(_id);
    resetTitle();
    resetDesc();
    resetTime();
    resetStatus();
    await getTasks();
    return setRenderTaskForm(false);
  };

  const updateTask = async (task: TaskForm, id: string) => {
    const { token } = useStorage(CALENDAR);
    const { status: respStatus, _id, message } = await putTask(task, token, id);
    if (respStatus !== CREATED) return setMessage(message);
    setIdSelected(_id);
    resetTitle();
    resetDesc();
    resetTime();
    resetStatus();
    await getTasks();
    return setRenderTaskForm(false);
  };

  const removeTask = async () => {
    const { token } = useStorage(CALENDAR);
    await deleteTask(idSelected, token);
    setRenderTaskDetails(false);
    setIdSelected(EMPTY);
    await getTasks();
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
    title,
    description,
    status,
    setTitle,
    setDescription,
    setStatus,
    time,
    setTime,
    editTask,
    edit,
    idSelected,
    updateTask,
    removeTask,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <TaskContext.Provider value={contextMemo}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
