import {
  useCallback, useContext, useEffect, useState,
} from 'react';
import { useStorage } from '.';
import { CALENDAR, EMPTY } from '../constants/strings';
import AppContext from '../contexts/app/AppContext';
import { getTask } from '../services/backend/tasks';
import { DefaultState } from '../types';

const useTask = (id = EMPTY) => {
  const appContext = useContext(AppContext);
  const { setRenderTaskDetails } = appContext as DefaultState;
  const [idSelected, setIdSelected] = useState(id);
  const [taskDetails, setTaskdetails] = useState({});

  const getTaskById = useCallback(async () => {
    if (!idSelected) return null;
    const { token } = useStorage(CALENDAR);
    const task = await getTask(token, idSelected);
    setTaskdetails(task);
    return setRenderTaskDetails(true);
  }, [idSelected]);

  useEffect(() => { getTaskById(); }, [getTaskById]);

  return { taskDetails, setIdSelected, idSelected };
};

export default useTask;
