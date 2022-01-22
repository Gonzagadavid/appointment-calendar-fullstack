import React, { useContext } from 'react';
import TaskContext from '../../contexts/tasks/TaskContext';
import { TaskState } from '../../types';

function AddTask() {
  const taskContext = useContext(TaskContext);
  const { setRenderTaskForm } = taskContext as TaskState;
  return (
    <button type="button" onClick={() => setRenderTaskForm(true)}>
      Add Task
    </button>
  );
}

export default AddTask;
