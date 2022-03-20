import React, { useContext } from 'react';
import TaskContext from '../../contexts/tasks/TaskContext';
import { TaskState } from '../../types';
import ConditionComponent from '../ConditionComponent';
import TaskItemList from '../TaskItemList';

function TaskList() {
  const taskContext = useContext(TaskContext);
  const { tasksSelected } = taskContext as TaskState;
  const checkList = !!tasksSelected.length;
  return (
    <>
      <ConditionComponent condition={checkList} className="TaskList">
        <ul>
          {tasksSelected.map(({
            title, date, id, status,
          }) => (
            <li key={id}>
              <TaskItemList title={title} date={date} id={id} status={status} />
            </li>
          ))}
        </ul>
      </ConditionComponent>
      <ConditionComponent condition={!checkList} className="TaskList">
        <p>no tasks added</p>
      </ConditionComponent>
    </>
  );
}

export default TaskList;
