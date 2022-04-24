import { Collection, MongoClient, ObjectId } from 'mongodb';
import mongoClientMock from '../mocks/mongoClientMock';
import { dbUser } from '../mocks/user';
import UserModel from '../../../models/UserModel';

describe('verifica os métodos da classe UserModel', () => {
  let connectionMock = null;
  let users: Collection|null = null;

  beforeEach(async () => {
    connectionMock = await mongoClientMock();
    MongoClient.connect = jest.fn().mockResolvedValueOnce(connectionMock);

    const db = await connectionMock.db('Calendar');
    users = await db.collection('users');
    await users.deleteMany({});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('verifica o funcionamento do método findUserbyEmail', async () => {
    const usersDb = users as Collection;
    await usersDb.insertOne({ ...dbUser, _id: new ObjectId(dbUser._id) });
    const model = new UserModel();

    const response = await model.findUserByEmail(dbUser.email);

    expect(response).toEqual({ ...dbUser, _id: new ObjectId(dbUser._id) });
  });
});
