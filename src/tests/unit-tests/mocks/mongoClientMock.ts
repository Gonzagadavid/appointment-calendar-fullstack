import { MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';
import * as mongoDB from 'mongodb';

let connection: Promise<MongoClient>|null = null;

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoDB.ConnectOptions;

const mongoClientMock = async () => {
  if (connection) return connection;

  const DBServer = await MongoMemoryServer.create();
  const URLMock = DBServer.getUri();

  connection = MongoClient.connect(URLMock, OPTIONS);

  return connection;
};

export default mongoClientMock;
