import { NOT_FOUND_TASK } from '../../errors';
import TaskModel from '../../models/TaskModel';
import { UpdateTask } from '../../types';

const updateTask: UpdateTask = async (id, task) => {
  const Task = new TaskModel();
  const updated = new Date();

  const oldTask = await Task.findTask(id);

  if (!oldTask) throw NOT_FOUND_TASK;

  await Task.updateTask(id, { ...task, updated });
};

export default updateTask;
