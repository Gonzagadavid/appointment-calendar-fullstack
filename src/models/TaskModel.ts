import { ObjectId } from 'mongodb';
import { Task } from '../types';
import DBModel from './DBModel';

class TaskModel extends DBModel {
  constructor() {
    super('tasks');
  }

  public async updateTask(id: string, task: Task) {
    const taskUpdated = await this.updateOne({ _id: new ObjectId(id) }, { $set: { ...task } });

    return taskUpdated;
  }

  public async findTask(id: string) {
    const task = await this.findOne({ _id: new ObjectId(id) });

    return task;
  }

  public async removeTask(id: string) {
    const taskUpdated = await this.deleteOne({ _id: new ObjectId(id) });

    return taskUpdated;
  }

  public async findAllTasks(userId: string) {
    const projection = {
      id: '$_id', title: 1, date: 1, status: 1, _id: 0,
    };
    const tasks = await this.find({ userId }, projection);
    return tasks;
  }
}

export default TaskModel;
