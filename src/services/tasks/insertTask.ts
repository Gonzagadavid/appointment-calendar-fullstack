import TaskModel from '../../models/TaskModel';
import { InsertTask } from '../../types';

const insertTask: InsertTask = async (task) => {
  const Task = new TaskModel();
  const updated = new Date();

  const { insertedId } = await Task.insertOne({ ...task, updated });

  return { _id: insertedId, ...task, updated };
};

export default insertTask;
