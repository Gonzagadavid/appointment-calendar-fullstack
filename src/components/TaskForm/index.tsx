import React, { useContext } from 'react';
import { monthNames } from '../../constants/namesList';
import { EMPTY } from '../../constants/strings';
import AppContext from '../../contexts/app/AppContext';
import TaskContext from '../../contexts/tasks/TaskContext';
import useInput from '../../hooks/useInput';
import { DefaultState, TaskState } from '../../types';
import ConditionComponent from '../ConditionComponent';
import './style.css';

function TaskForm() {
  const taskContext = useContext(TaskContext);
  const appContext = useContext(AppContext);
  const { selectedDay, selectedMonth, selectedYear } = appContext as DefaultState;
  const { postNewTask, renderTaskForm } = taskContext as TaskState;

  const { state: title, setState: setTitle } = useInput(EMPTY);
  const { state: description, setState: setDescription } = useInput(EMPTY);
  const { state: status, setState: setStatus } = useInput('Programmed');

  const saveTask = () => {
    const month = monthNames.indexOf(selectedMonth);
    const date = `${new Date(selectedYear, month, selectedDay)}`;
    postNewTask({
      title, description, status, date,
    });
  };

  return (
    <ConditionComponent condition={renderTaskForm} className="TaskForm">
      <div className="formContainer">
        <input placeholder="Title" value={title} onChange={setTitle} />
        <input placeholder="Description" value={description} onChange={setDescription} />
        <label htmlFor="status">
          Status:
          <select id="status" value={status} onChange={setStatus}>
            <option>Programmed</option>
            <option>In progress</option>
            <option>Completed</option>
          </select>
        </label>
        <button type="button" onClick={saveTask}>Save</button>
      </div>
    </ConditionComponent>
  );
}

export default TaskForm;
