import { Document, WithId } from 'mongodb';
import { Task, TaskProcess } from '../../types';

const processTasks = (tasks: WithId<Document>[]) => {
  const taksList = tasks.map((task) => {
    const {
      _id: id, title, date, status,
    } = task as Task;
    return {
      id, title, date, status,
    } as TaskProcess;
  });
  return taksList;
};

export default processTasks;
