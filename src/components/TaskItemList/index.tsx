import React, { useContext } from 'react';
import TaskContext from '../../contexts/tasks/TaskContext';
import { TaskItem, TaskState } from '../../types';

function TaskItemList(props: TaskItem) {
  const { id, date, title } = props;
  const taskContext = useContext(TaskContext);
  const { setIdSelected } = taskContext as TaskState;
  const dateTask = new Date(date);
  const hour = dateTask.getHours();
  const minutes = dateTask.getMinutes();

  const selectTask = () => {
    setIdSelected(id);
  };
  return (
    <button type="button" id={id} onClick={selectTask}>
      <span>{title}</span>
      <span>{`${hour}:${minutes}`}</span>
    </button>
  );
}

export default TaskItemList;
