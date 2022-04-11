import React, { useContext } from 'react';
import TaskContext from '../../contexts/tasks/TaskContext';
import { TaskItem, TaskState } from '../../types';
import './style.css';

function TaskItemList(props: TaskItem) {
  const {
    id, date, title, status,
  } = props;
  const taskContext = useContext(TaskContext);
  const { setIdSelected } = taskContext as TaskState;
  const dateTask = new Date(date);
  const time = dateTask.toLocaleTimeString([], { timeStyle: 'short' });

  const selectTask = () => {
    setIdSelected(id);
  };
  return (
    <button className="TaskItem" type="button" id={id} onClick={selectTask}>
      <span>{title}</span>
      {' '}
      -
      <span>{time}</span>
      {' '}
      -
      <span>{status}</span>
    </button>
  );
}

export default TaskItemList;
