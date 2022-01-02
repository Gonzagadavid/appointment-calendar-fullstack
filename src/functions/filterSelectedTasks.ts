import { monthNames } from '../constants/namesList';
import { TaksSelectedDate, TaskItem } from '../types';

const filterSelectedTasks = (dateSelected: TaksSelectedDate, taskList: TaskItem[]) => {
  const { selectedDay, selectedMonth, selectedYear } = dateSelected;
  const monthPosition = monthNames.indexOf(selectedMonth);
  const taskFiltred = taskList.filter(({ date }) => {
    const taskDate = new Date(date);
    const check = taskDate.getDate() === selectedDay
    && taskDate.getMonth() === monthPosition
    && taskDate.getFullYear() === selectedYear;
    return check;
  });

  return taskFiltred;
};

export default filterSelectedTasks;
