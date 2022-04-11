import React, { useContext } from 'react';
import ConditionComponent from '../ConditionComponent';
import { EMPTY } from '../../constants/strings';
import TaskContext from '../../contexts/tasks/TaskContext';
import getDate from '../../functions/getDate';
import { DefaultState, TaskState } from '../../types';
import './style.css';
import AppContext from '../../contexts/app/AppContext';
import { ONE } from '../../constants/numbers';

function TaskDetails() {
  const appContext = useContext(AppContext);
  const { setRenderTaskDetails, renderTaskDetails } = appContext as DefaultState;
  const taskContext = useContext(TaskContext);
  const {
    taskDetails, setIdSelected, editTask, removeTask,
  } = taskContext as TaskState;
  const {
    title, description, date, status, updated,
  } = taskDetails;
  const {
    year, month, day, hour, minutes,
  } = getDate(date);
  const updateDate = getDate(updated);
  const formatMinutes = String(minutes).length === ONE ? `0${minutes}` : minutes;

  const renderDetails = () => {
    setRenderTaskDetails(false);
    setIdSelected(EMPTY);
  };
  return (
    <ConditionComponent condition={renderTaskDetails} className="TaskDetails">
      <div className="detailsContainer">

        <h2>{title}</h2>
        <p>
          <span>Description:</span>
          {description}
        </p>
        <p>
          <span>Date:</span>
          {`${month} ${day}, ${year}`}
        </p>
        <p>
          <span>Scheduled Time:</span>
          {`${hour}:${formatMinutes}`}
        </p>
        <p>
          <span>Status:</span>
          {status}
        </p>
        <p>
          <span>Last Update:</span>
          {`${updateDate.month} ${updateDate.day}, ${updateDate.year}  ${updateDate.hour}:${updateDate.minutes}`}
        </p>
        <div className="button-container">
          <button type="button" onClick={renderDetails}>Close</button>
          <button type="button" onClick={editTask}>Edit</button>
          <button type="button" onClick={removeTask}>Remove</button>
        </div>
      </div>
    </ConditionComponent>
  );
}

export default TaskDetails;
