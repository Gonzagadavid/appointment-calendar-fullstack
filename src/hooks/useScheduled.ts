import { useContext } from 'react';
import TaskContext from '../contexts/tasks/TaskContext';
import { TaskState } from '../types';

const useScheduled = (year: number, month: number, day: number) => {
  const taskContext = useContext(TaskContext);
  const { allTasks } = taskContext as TaskState;
  const checked = allTasks.some(({ date }) => {
    const checkDate = new Date(date);
    return checkDate.getDate() === day
      && checkDate.getMonth() === month
      && checkDate.getFullYear() === year;
  });
  return checked;
};

export default useScheduled;
