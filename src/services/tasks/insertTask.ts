import TaskModel from '../../models/TaskModel';
import { InsertTask } from '../../types';

const insertTask: InsertTask = async (task) => {
  const Task = new TaskModel();

  const { insertedId } = await Task.insertOne(task);

  const updated = new Date();

  return { _id: insertedId, ...task, updated };
};

export default insertTask;
