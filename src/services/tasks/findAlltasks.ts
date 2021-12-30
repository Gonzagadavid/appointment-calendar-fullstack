import TaskModel from '../../models/TaskModel';
import { GetAllTasks } from '../../types';

const findAllTasks: GetAllTasks = async (userId) => {
  const Task = new TaskModel();

  const taskList = await Task.findAllTasks(userId);

  return taskList;
};

export default findAllTasks;
