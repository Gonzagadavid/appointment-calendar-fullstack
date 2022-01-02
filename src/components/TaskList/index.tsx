import React, { useContext } from 'react';
import TaskContext from '../../contexts/tasks/TaskContext';
import { TaskState } from '../../types';
import ConditionComponent from '../ConditionComponent';

function TaskList() {
  const taskContext = useContext(TaskContext);
  const { tasksSelected } = taskContext as TaskState;
  const checkList = !!tasksSelected.length;
  return (
    <>
      <ConditionComponent condition={checkList} className="TaskList">
        <ul>
          { tasksSelected.map(({ title, date, id }) => {
            const dateTask = new Date(date);
            const hour = dateTask.getHours();
            const minutes = dateTask.getMinutes();
            return (
              <li key={id} id={id}>
                <span>{title}</span>
                <span>{`${hour}:${minutes}`}</span>
              </li>
            );
          })}
        </ul>
      </ConditionComponent>
      <ConditionComponent condition={!checkList} className="TaskList">
        <p>no tasks added</p>
      </ConditionComponent>
    </>
  );
}

export default TaskList;
