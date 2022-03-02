import React, {
  PropsWithChildren, ReactNode, useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import {
  DefaultState, TaskDetailsType, TaskForm, TaskItem,
} from '../../types';

import {
  useStorage, useFormInput, useAllTasks, useTask, putTask, deleteTask, postTask,
  AppContext, CREATED, NOT_CONTENT, CALENDAR, EMPTY, timeCrr, TaskContext, filterSelectedTasks,
} from './imports';

function TaskProvider(props: PropsWithChildren<ReactNode>) {
  const { children } = props;
  const appContext = useContext(AppContext);
  const {
    connected, selectedDay, selectedMonth, selectedYear, setMessage,
    setRenderTaskDetails, setRenderTaskForm,
  } = appContext as DefaultState;
  const initialList: TaskItem[] = [];
  const { allTasks, getTasks } = useAllTasks(connected);
  const [tasksSelected, setTasksSelected] = useState(initialList);
  const { taskDetails, idSelected, setIdSelected } = useTask(EMPTY);
  const [edit, setEdit] = useState(false);
  const { state: taskForm, setState: setTaskForm, resetState: resetTaskForm } = useFormInput({
    title: EMPTY, description: EMPTY, time: timeCrr, status: 'Programmed',
  });

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
    setEdit(false);
    await getTasks();
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

  useEffect(() => selectDate(), [selectDate]);

  const context = {
    allTasks,
    tasksSelected,
    setIdSelected,
    taskDetails,
    postNewTask,
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
