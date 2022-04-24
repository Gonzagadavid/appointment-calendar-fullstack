import { NOT_FOUND_TASK, UNAUTHORIZED_USER } from '../errors';
import TaskModel from '../models/TaskModel';
import { Task } from '../types';

class TasksService {
  private model: TaskModel;

  constructor(model = new TaskModel()) {
    this.model = model;
  }

  public async findAllTasks(userId: string) {
    const tasks = await this.model.findAllTasks(userId);

    return tasks;
  }

  public async findTask(id: string, userId: string) {
    const task = await this.model.findTask(id);

    if (!task) throw NOT_FOUND_TASK;

    if (task.userId !== userId) throw UNAUTHORIZED_USER;

    return task;
  }

  public async insertTask(task: Task) {
    const updated = new Date();

    const { insertedId } = await this.model.insertOne({ ...task, updated });

    return { _id: insertedId, ...task, updated };
  }

  public async removeTask(id: string, userId: string) {
    await this.findTask(id, userId);

    await this.model.removeTask(id);
  }

  public async updateTask(id: string, task: Task) {
    const updated = new Date();
    const { userId } = task;

    const oldTask = await this.findTask(id, String(userId));

    if (String(oldTask.userId) !== String(task.userId)) throw UNAUTHORIZED_USER;

    await this.model.updateTask(id, { ...task, updated });
  }
}

export default TasksService;
