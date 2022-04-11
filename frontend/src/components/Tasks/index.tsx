import React from 'react';
import AddTask from '../AddTask';
import TaskDate from '../TaskDate';
import TaskList from '../TaskList';
import './style.css';

function Tasks() {
  return (
    <div className="Task">
      <TaskDate />
      <TaskList />
      <AddTask />
    </div>
  );
}

export default Tasks;
