import { ObjectId } from 'mongodb';
import { Task } from '../types';
import DBModel from './DBModel';

class TaskModel extends DBModel {
  constructor() {
    super('tasks');
  }

  async updateTask(id: string, task: Task) {
    const taskUpdated = await this.updateOne({ _id: new ObjectId(id) }, { $set: { ...task } });

    return taskUpdated;
  }

  async findTask(id: string) {
    const task = await this.findOne({ _id: new ObjectId(id) });

    return task;
  }

  async removeTask(id: string) {
    const taskUpdated = await this.deleteOne({ _id: new ObjectId(id) });

    return taskUpdated;
  }

  async findAllTasks(userId: string) {
    const tasks = await this.find({ userId });
    return tasks;
  }
}

export default TaskModel;
