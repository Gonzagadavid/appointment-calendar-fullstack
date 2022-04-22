import { ObjectId } from 'mongodb';
import { NOT_FOUND_TASK, UNAUTHORIZED_USER } from '../../../errors';
import TaskModel from '../../../models/TaskModel';
import TasksService from '../../../services/TasksService';
import { tasks, task, reqTask } from '../mocks/tasks';

describe('verifica o funcionamento dos métodos da classe TaskService', () => {
  it('verifica o funcionamento do método findAllTasks', async () => {
    const model = new TaskModel();
    model.findAllTasks = jest.fn().mockResolvedValue(tasks);
    const service = new TasksService(model);

    const response = await service.findAllTasks('625333e34b6c6911e42b7590');

    expect(response).toEqual(tasks);
  });

  it('verifica o funcionamento do método findTask', async () => {
    const model = new TaskModel();
    model.findTask = jest.fn().mockResolvedValue(task);
    const service = new TasksService(model);

    const response = await service.findTask('6253391c4b6c6911e42b7593', '625333e34b6c6911e42b7590');

    expect(response).toEqual(task);
  });

  it('verifica o funcionamento do método findTask quando a task não exite', async () => {
    const model = new TaskModel();
    model.findTask = jest.fn().mockResolvedValue(null);
    const service = new TasksService(model);

    expect(async () => {
      const response = await service.findTask('6253391c4b6c6911e42b7593', '625333e34b6c6911e42b7590');
      return response;
    }).rejects.toEqual(NOT_FOUND_TASK);
  });

  it('verifica o funcionamento do método findTask quando a task não pertence ao usuário', async () => {
    const model = new TaskModel();
    model.findTask = jest.fn().mockResolvedValue(task);
    const service = new TasksService(model);

    expect(async () => {
      const response = await service.findTask('6253391c4b6c6911e42b7593', '625333e34b6c6911e42b7599');
      return response;
    }).rejects.toEqual(UNAUTHORIZED_USER);
  });

  it('verifica o funcionamento do método insertTask', async () => {
    const model = new TaskModel();
    model.insertOne = jest.fn().mockResolvedValue({ insertedId: '6253391c4b6c6911e42b7593' });
    const service = new TasksService(model);

    const response = await service.insertTask(reqTask);

    expect(response).toEqual({
      ...task,
      updated: new Date(),
      date: new Date(task.date),
      userId: new ObjectId(task.userId),
    });
  });
});
