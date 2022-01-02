import React from 'react';
import TaskProvider from '../../contexts/tasks/TaskProvider';
import TaskDate from '../TaskDate';
import TaskList from '../TaskList';

function Tasks() {
  return (
    <div>
      <TaskProvider>
        <TaskDate />
        <TaskList />
      </TaskProvider>
    </div>
  );
}

export default Tasks;
