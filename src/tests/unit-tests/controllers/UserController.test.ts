import { Request, Response } from 'express';
import { USER_CREATED } from '../../../constants/strings';
import UserService from '../../../services/UserService';
import UserController from '../../../controllers/UserController';
import { INTERNAL_ERROR } from '../../../errors';

const user = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJJZCI6IjYyNTMzM2UzNGI2YzY5MTFlNDJiNzU5MCIsImVtYWlsIjoidXNlckBzZXJ2ZXIuY29tIn0sImlhdCI6MTY0OTYyMDI5M30.OfG82bGfsF_TJqLJ3Cp1SIAZMgaTGxxY_WChRBX-85E',
  userName: 'User Test',
};

describe('verifica o funcionamento dos métodos da classe UserController', () => {
  const next = jest.fn();
  const json = jest.fn();
  const res = {
    status: jest.fn(() => ({ json })),
  } as unknown as Response;
  const req = {
    body: {
      name: 'User',
      lastname: 'Test',
      email: 'user@server.com',
      password: '123456',
    },
  } as Request;

  it('verifica o funcionamento do método postUsers', async () => {
    const service = new UserService();
    service.insertUser = jest.fn().mockResolvedValue({ message: USER_CREATED });
    const controller = new UserController(service);

    await controller.postUsers(req, res, next);

    expect(res.status).toBeCalledWith(201);
    expect(json).toBeCalledWith({ message: USER_CREATED });
  });

  it('verifica se ao ocorrer um erro no método postUsers o erro é passado para o next', async () => {
    const service = new UserService();
    service.insertUser = jest.fn().mockRejectedValue(INTERNAL_ERROR);
    const controller = new UserController(service);

    await controller.postUsers(req, res, next);

    expect(next).toBeCalledWith(INTERNAL_ERROR);
  });

  it('verifica o funcionamento do método postLogin', async () => {
    const service = new UserService();
    service.login = jest.fn().mockResolvedValue(user);
    const controller = new UserController(service);

    await controller.postLogin(req, res, next);

    expect(res.status).toBeCalledWith(202);
    expect(json).toBeCalledWith(user);
  });

  it('verifica se ao ocorrer um erro no método postLogin o erro é passado para o next', async () => {
    const service = new UserService();
    service.login = jest.fn().mockRejectedValue(INTERNAL_ERROR);
    const controller = new UserController(service);

    await controller.postLogin(req, res, next);

    expect(next).toBeCalledWith(INTERNAL_ERROR);
  });
});
