import React from 'react';
import AddTask from '../AddTask';
import TaskDate from '../TaskDate';
import TaskList from '../TaskList';

function Tasks() {
  return (
    <div>
      <TaskDate />
      <TaskList />
      <AddTask />
    </div>
  );
}

export default Tasks;
