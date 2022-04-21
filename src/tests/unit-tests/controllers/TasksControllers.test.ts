import { Request, Response } from 'express';
import TasksController from '../../../controllers/TasksController';
import { INTERNAL_ERROR } from '../../../errors';
import TasksService from '../../../services/TasksService';

const task = {
  id: '6253391c4b6c6911e42b7593',
  userId: '625333e34b6c6911e42b7590',
  email: 'user@server.com',
  title: 'Tarefa 1',
  description: 'Descrição da tarefa 1',
  status: 'Programmed',
  date: '2022-04-10T16:46:08.471+00:00',
  updated: '2022-04-10T20:07:56.489Z',
};

const tasks = [
  {
    title: 'Tarefa 1',
    status: 'Programmed',
    date: '2022-04-10T16:46:08.471+00:00',
    id: '6253391c4b6c6911e42b7593',
  },
  {
    title: 'Tarefa 2',
    status: 'Programmed',
    date: '2022-04-10T16:46:08.471+00:00',
    id: '625339394b6c6911e42b7594',
  },
];

describe('verifica o funcionamento do métodos da classe TaskController', () => {
  const next = jest.fn();
  const json = jest.fn();
  const res = {
    status: jest.fn(() => ({ json })),
  } as unknown as Response;
  const req = { user: { userId: '1', email: 'fulano@email.com' } } as Request;

  afterEach(jest.clearAllMocks);

  it('verifica o funcionamento do método getAllTasks', async () => {
    const service = new TasksService();
    service.findAllTasks = jest.fn().mockResolvedValue(tasks);
    const controller = new TasksController(service);
    await controller.getAllTasks(req, res, next);

    expect(res.status).toBeCalledWith(200);
    expect(json).toBeCalledWith({ tasks });
  });

  it('verifica se ao ocorrer um erro no método getAllTasks é passado para o next', async () => {
    const service = new TasksService();
    service.findAllTasks = jest.fn().mockRejectedValue(INTERNAL_ERROR);
    const controller = new TasksController(service);
    await controller.getAllTasks(req, res, next);

    expect(next).toBeCalledWith(INTERNAL_ERROR);
  });

  it('verifica o funcionamento do método getTask', async () => {
    req.params = { id: '6253391c4b6c6911e42b7593' };
    const service = new TasksService();
    service.findTask = jest.fn().mockResolvedValue(task);
    const controller = new TasksController(service);
    await controller.getTask(req, res, next);

    expect(res.status).toBeCalledWith(200);
    expect(json).toBeCalledWith(task);
  });

  it('verifica se ao ocorrer um erro no método getTask é passado para o next', async () => {
    req.params = { id: '6253391c4b6c6911e42b7593' };
    const service = new TasksService();
    service.findTask = jest.fn().mockRejectedValue(INTERNAL_ERROR);
    const controller = new TasksController(service);
    await controller.getTask(req, res, next);

    expect(next).toBeCalledWith(INTERNAL_ERROR);
  });

  it('verifica o funcionamento do método postTask', async () => {
    const service = new TasksService();
    service.insertTask = jest.fn().mockResolvedValue(task);
    const controller = new TasksController(service);
    await controller.postTask(req, res, next);

    expect(res.status).toBeCalledWith(201);
    expect(json).toBeCalledWith(task);
  });

  it('verifica se ao ocorrer um erro no método getTask é passado para o next', async () => {
    const service = new TasksService();
    service.insertTask = jest.fn().mockRejectedValue(INTERNAL_ERROR);
    const controller = new TasksController(service);
    await controller.postTask(req, res, next);

    expect(next).toBeCalledWith(INTERNAL_ERROR);
  });
});
