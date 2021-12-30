import { NOT_FOUND } from '../../constants/status';
import { UNAUTHORIZED_USER } from '../../errors';
import TaskModel from '../../models/TaskModel';
import { GetTask } from '../../types';

const findTask: GetTask = async (id, userId) => {
  const Task = new TaskModel();

  const task = await Task.findTask(id);

  if (!task) throw NOT_FOUND;

  if (task.userId !== userId) throw UNAUTHORIZED_USER;

  return task;
};

export default findTask;
