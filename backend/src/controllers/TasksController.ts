import { NextFunction, Request, Response } from 'express';
import { ACCEPTED, CREATED, OK } from '../constants/status';
import { TASK_MODIFY, TASK_REMOVED } from '../constants/strings';
import TasksService from '../services/TasksService';
import { UserInfo } from '../types';

class TasksController {
  private service: TasksService;

  constructor() {
    this.service = new TasksService();
    this.getAllTasks = this.getAllTasks.bind(this);
    this.getTask = this.getTask.bind(this);
    this.postTask = this.postTask.bind(this);
    this.putTask = this.putTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  public async getAllTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.user as UserInfo;

      const tasks = await this.service.findAllTasks(userId);

      res.status(OK).json({ tasks });
    } catch (err) {
      next(err);
    }
  }

  public async getTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { params: { id }, user } = req;
      const { userId } = user as UserInfo;

      const task = await this.service.findTask(id, userId);

      res.status(OK).json(task);
    } catch (err) {
      next(err);
    }
  }

  public async postTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { user, body } = req;
      const insertedTask = await this.service.insertTask({ ...user, ...body });

      res.status(CREATED).json(insertedTask);
    } catch (err) {
      next(err);
    }
  }

  public async putTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { user, body, params: { id } } = req;

      await this.service.updateTask(id, { ...user, ...body });

      res.status(ACCEPTED).json({ message: TASK_MODIFY });
    } catch (err) {
      next(err);
    }
  }

  public async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { user, params: { id } } = req;
      const { userId } = user as UserInfo;

      await this.service.removeTask(id, userId);

      res.status(ACCEPTED).json({ message: TASK_REMOVED });
    } catch (err) {
      next(err);
    }
  }
}

export default TasksController;
