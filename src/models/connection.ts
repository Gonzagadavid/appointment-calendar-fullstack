import * as mongoDB from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoDB.ConnectOptions;

const MONGO_DB_URL = process.env.MONGO_URL || 'localhost';
const DB_NAME = 'Calendar';

let db : mongoDB.Db | null = null;
const connection = () => (db
  ? Promise.resolve(db)
  : mongoDB.MongoClient.connect(MONGO_DB_URL, OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    }));

export default connection;
