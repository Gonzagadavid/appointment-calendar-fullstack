import TaskModel from '../../models/TaskModel';
import { GetAllTasks } from '../../types';
import processTasks from '../helpers/processTasks';

const findAllTasks: GetAllTasks = async (userId) => {
  const Task = new TaskModel();

  const tasks = await Task.findAllTasks(userId);
  const taskList = processTasks(tasks);

  return taskList;
};

export default findAllTasks;
