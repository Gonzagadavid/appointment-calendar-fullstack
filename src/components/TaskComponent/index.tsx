import React from 'react';
import Content from '../Content';
import TaskProvider from '../../contexts/tasks/TaskProvider';
import TaskDetails from '../TaskDetails';
import TaskForm from '../TaskForm';

function TaskComponent() {
  return (
    <TaskProvider>
      <Content />
      <TaskDetails />
      <TaskForm />
    </TaskProvider>
  );
}

export default TaskComponent;
