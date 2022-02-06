import React, {
  PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import filterSelectedTasks from '../../functions/filterSelectedTasks';
import { useStorage, useFormInput } from '../../hooks';
import {
  getAllTasks, getTask, putTask, deleteTask, postTask,
} from '../../services/backend/tasks';
import {
  DefaultState, TaskDetailsType, TaskForm, TaskItem,
} from '../../types';
import AppContext from '../app/AppContext';
import TaskContext from './TaskContext';
import { CREATED, NOT_CONTENT } from '../../constants/status';
import { CALENDAR, EMPTY } from '../../constants/strings';
import { timeCrr } from '../../constants/currentDate';

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
  const { state: taskForm, setState: setTaskForm, resetState: resetTaskForm } = useFormInput({
    title: EMPTY, description: EMPTY, time: timeCrr, status: 'Programmed',
  });

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
    resetTaskForm({
      title: titleDetails, description: descripDetails, time: timeDetails, status: statusDetails,
    });
    setRenderTaskDetails(false);
    setRenderTaskForm(true);
    setEdit(true);
  };

  const postNewTask = async (task: TaskForm) => {
    const { token } = useStorage(CALENDAR);
    const { status: respStatus, _id, message } = await postTask(task, token);
    if (respStatus !== CREATED) return setMessage(message);
    setIdSelected(_id);
    resetTaskForm();
    await getTasks();
    setEdit(false);
    return setRenderTaskForm(false);
  };

  const updateTask = async (task: TaskForm, id: string) => {
    const { token } = useStorage(CALENDAR);
    const { status: respStatus, message } = await putTask(task, token, id);
    if (respStatus !== NOT_CONTENT) setMessage(message);
    setIdSelected(EMPTY);
    resetTaskForm();
    setEdit(false);
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
    editTask,
    edit,
    idSelected,
    updateTask,
    removeTask,
    taskForm,
    setTaskForm,
  };

  const contextMemo = useMemo(() => context, [context]);

  return (
    <TaskContext.Provider value={contextMemo}>
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
