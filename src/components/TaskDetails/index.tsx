import React, { useContext } from 'react';
import ConditionComponent from '../ConditionComponent';
import { EMPTY } from '../../constants/strings';
import TaskContext from '../../contexts/tasks/TaskContext';
import getDate from '../../functions/getDate';
import { TaskState } from '../../types';
import './style.css';

function TaskDetails() {
  const taskContext = useContext(TaskContext);
  const {
    taskDetails, setRenderTaskDetails, renderTaskDetails, setIdSelected,
  } = taskContext as TaskState;
  const {
    title, description, date, status, updated,
  } = taskDetails;
  const {
    year, month, day, hour, minutes,
  } = getDate(date);
  const updateDate = getDate(updated);

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
          {`${hour}:${minutes}`}
        </p>
        <p>
          <span>Status:</span>
          {status}
        </p>
        <p>
          <span>Last Update:</span>
          {`${updateDate.month} ${updateDate.day}, ${updateDate.year}  ${updateDate.hour}:${updateDate.minutes}`}
        </p>
        <button type="button" onClick={renderDetails}>Close</button>
      </div>
    </ConditionComponent>
  );
}

export default TaskDetails;
