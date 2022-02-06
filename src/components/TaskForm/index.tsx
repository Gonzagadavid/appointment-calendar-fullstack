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
    postNewTask, renderTaskForm, setRenderTaskForm, edit, idSelected,
    updateTask, taskForm, setTaskForm,
  } = taskContext as TaskState;
  const {
    title, time, description, status,
  } = taskForm;

  const editTask = () => {
    const [hour, minutes] = time.split(':').map((str) => +str);
    const month = monthNames.indexOf(selectedMonth);
    const date = `${new Date(selectedYear, month, selectedDay, hour, minutes)}`;
    updateTask({ ...taskForm, date }, idSelected);
  };

  const saveTask = () => {
    const [hour, minutes] = time.split(':').map((str) => +str);
    const month = monthNames.indexOf(selectedMonth);
    const date = `${new Date(selectedYear, month, selectedDay, hour, minutes)}`;
    postNewTask({ ...taskForm, date });
  };

  return (
    <ConditionComponent condition={renderTaskForm} className="TaskForm">
      <div className="formContainer">
        <input placeholder="Title" name="title" value={title} onChange={setTaskForm} />
        <input placeholder="Description" name="description" value={description} onChange={setTaskForm} />
        <label htmlFor="time">
          Scheduled Time:
          <input type="time" id="time" name="time" value={time} onChange={setTaskForm} />
        </label>
        <label htmlFor="status">
          Status:
          <select id="status" name="status" value={status} onChange={setTaskForm}>
            <option>Programmed</option>
            <option>In progress</option>
            <option>Completed</option>
          </select>
        </label>
        <div>
          <button type="button" onClick={edit ? editTask : saveTask}>Save</button>
          <button type="button" onClick={() => setRenderTaskForm(false)}>Cancel</button>
        </div>
      </div>
    </ConditionComponent>
  );
}

export default TaskForm;
