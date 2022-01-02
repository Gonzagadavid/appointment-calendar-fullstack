import { Document, WithId } from 'mongodb';
import { Task, TaskProcess } from '../../types';

const processTasks = (tasks: WithId<Document>[]) => {
  const taksList = tasks.map((task) => {
    const { _id: id, title, date } = task as Task;
    return { id, title, date } as TaskProcess;
  });
  return taksList;
};

export default processTasks;
