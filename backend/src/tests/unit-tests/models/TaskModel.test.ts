import { Collection, MongoClient, ObjectId } from 'mongodb';
import mongoClientMock from '../mocks/mongoClientMock';
import { reqTask, task, tasks as allTasks } from '../mocks/tasks';
import TaskModel from '../../../models/TaskModel';

describe('verifica os métodos da classe TaskModel', () => {
  let connectionMock = null;
  let tasks: Collection|null = null;

  beforeEach(async () => {
    connectionMock = await mongoClientMock();
    MongoClient.connect = jest.fn().mockResolvedValueOnce(connectionMock);

    const db = await connectionMock.db('Calendar');
    tasks = await db.collection('tasks');
    await tasks.deleteMany({});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('verifica o funcionamento do méotodo updateTask', async () => {
    const tasksDb = tasks as Collection;
    await tasksDb.insertOne({ ...task, _id: new ObjectId(task._id) });
    const model = new TaskModel();

    await model.updateTask(task._id, { ...reqTask, title: 'modificada' });

    const response = await tasksDb.findOne({ _id: new ObjectId(task._id) });
    expect(response).toEqual({
      ...task,
      title: 'modificada',
      date: new Date(task.date),
      userId: new ObjectId(task.userId),
      _id: new ObjectId(task._id),
    });
  });

  it('verifica o funcionamento do méotodo findTask', async () => {
    const tasksDb = tasks as Collection;
    await tasksDb.insertOne({ ...task, _id: new ObjectId(task._id) });
    const model = new TaskModel();

    const response = await model.findTask(task._id);

    expect(response).toEqual({ ...task, _id: new ObjectId(task._id) });
  });

  it('verifica o funcionamento do méotodo findAllTasks', async () => {
    const tasksDb = tasks as Collection;
    await tasksDb.insertMany([
      { ...task, _id: new ObjectId(task._id) },
      { ...task, _id: new ObjectId('625339394b6c6911e42b7594'), title: 'Tarefa 2' },
    ]);
    const model = new TaskModel();

    const response = await model.findAllTasks(task.userId);

    expect(response).toEqual(allTasks.map((taskResp) => ({
      ...taskResp,
      id: new ObjectId(taskResp.id),
    })));
  });

  it('verifica o funcionamento do méotodo removeTask', async () => {
    const tasksDb = tasks as Collection;
    await tasksDb.insertOne({ ...task, _id: new ObjectId(task._id) });
    const model = new TaskModel();

    const response = await model.removeTask(task._id);

    expect(response.deletedCount).toBe(1);
  });

  it('verifica o funcionamento do méotodo insertOne', async () => {
    const tasksDb = tasks as Collection;
    const model = new TaskModel();
    await model.insertOne({ ...task, _id: new ObjectId(task._id) });

    const response = await tasksDb.findOne({ _id: new ObjectId(task._id) });

    expect(response).toEqual({ ...task, _id: new ObjectId(task._id) });
  });
});
