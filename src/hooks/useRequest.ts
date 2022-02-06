import { useCallback, useEffect, useState } from 'react';
import useStorage from './useStorage';
import { CALENDAR } from '../constants/strings';
import { TaskItem } from '../types';

const useRequest = (
  dependeces: string,
  condition: boolean,
  request:()=>TaskItem[],
  params:string[],
  initialState: []|TaskItem[],
) => {
  const [state, setState] = useState(initialState);
  const callback = useCallback(async () => {
    if (condition) return null;
    const { token } = useStorage(CALENDAR);
    const response = await request(token, ...params);
    return setState(response);
  }, [...dependeces]);

  useEffect(() => { callback(); }, [callback]);

  return { state, callback };
};

export default useRequest;
