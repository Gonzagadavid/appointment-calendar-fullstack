import { USER_CREATED } from '../../../constants/strings';
import { EMAIL_ALREADY_EXISTS } from '../../../errors';
import UserModel from '../../../models/UserModel';
import UserService from '../../../services/UserService';
import { dbUser, reqUser } from '../mocks/user';

describe('verifica o funcionamento dos métodos da classe UserService', () => {
  afterEach(jest.clearAllMocks);

  it('verifica o funcionamento do método insertUser', async () => {
    const model = new UserModel();
    model.findUserByEmail = jest.fn().mockResolvedValue(null);
    model.insertOne = jest.fn().mockResolvedValue(null);
    const service = new UserService(model);

    const response = await service.insertUser(reqUser);

    expect(response).toEqual({ message: USER_CREATED });
  });

  it('verifica o funcionamento do método insertUser ao inserir um email existente', async () => {
    const model = new UserModel();
    model.findUserByEmail = jest.fn().mockResolvedValue(dbUser);
    model.insertOne = jest.fn().mockResolvedValue(null);
    const service = new UserService(model);

    expect(async () => {
      const response = await service.insertUser(reqUser);
      return response;
    }).rejects.toEqual(EMAIL_ALREADY_EXISTS);
  });
});
