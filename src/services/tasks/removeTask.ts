import { NOT_FOUND_TASK, UNAUTHORIZED_USER } from '../../errors';
import TaskModel from '../../models/TaskModel';
import { RemoveTask } from '../../types';

const removeTask: RemoveTask = async (id, userId) => {
  const Task = new TaskModel();

  const oldTask = await Task.findTask(id);

  if (!oldTask) throw NOT_FOUND_TASK;

  if (oldTask.userId !== userId) throw UNAUTHORIZED_USER;

  await Task.removeTask(id);
};

export default removeTask;
