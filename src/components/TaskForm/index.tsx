import React, { useContext } from 'react';
import { monthNames } from '../../constants/namesList';
import AppContext from '../../contexts/app/AppContext';
import TaskContext from '../../contexts/tasks/TaskContext';
import { DefaultState, TaskState } from '../../types';
import ConditionComponent from '../ConditionComponent';
import './style.css';

function TaskForm() {
  const taskContext = useContext(TaskContext);
  const appContext = useContext(AppContext);
  const { selectedDay, selectedMonth, selectedYear } = appContext as DefaultState;
  const {
    postNewTask, renderTaskForm, setRenderTaskForm, title,
    setTitle, description, setDescription, status, setStatus,
    time, setTime, edit, idSelected, updateTask,
  } = taskContext as TaskState;

  const editTask = () => {
    const [hour, minutes] = time.split(':').map((str) => +str);
    const month = monthNames.indexOf(selectedMonth);
    const date = `${new Date(selectedYear, month, selectedDay, hour, minutes)}`;
    updateTask({
      title, description, status, date,
    }, idSelected);
  };

  const saveTask = () => {
    const [hour, minutes] = time.split(':').map((str) => +str);
    const month = monthNames.indexOf(selectedMonth);
    const date = `${new Date(selectedYear, month, selectedDay, hour, minutes)}`;
    postNewTask({
      title, description, status, date,
    });
  };

  return (
    <ConditionComponent condition={renderTaskForm} className="TaskForm">
      <div className="formContainer">
        <input placeholder="Title" value={title} onChange={setTitle} />
        <input placeholder="Description" value={description} onChange={setDescription} />
        <label htmlFor="time">
          Scheduled Time:
          <input type="time" id="time" value={time} onChange={setTime} />
        </label>
        <label htmlFor="status">
          Status:
          <select id="status" value={status} onChange={setStatus}>
            <option>Programmed</option>
            <option>In progress</option>
            <option>Completed</option>
          </select>
        </label>
        <div>
          <button type="button" onClick={edit ? saveTask : editTask}>Save</button>
          <button type="button" onClick={() => setRenderTaskForm(false)}>Cancel</button>
        </div>
      </div>
    </ConditionComponent>
  );
}

export default TaskForm;
