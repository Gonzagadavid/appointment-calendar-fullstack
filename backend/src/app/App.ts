import express, { Application, Router } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import { error } from '../middlewares';
import { DEFAULT_PORT } from '../constants/numbers';

config();

const { FRONTENDAPP, PORT } = process.env;
const origin = FRONTENDAPP;

const started = `started in port ${PORT}`;

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.app.use(cors({ origin }));
    this.app.use(express.json());
  }

  public startServer(port = DEFAULT_PORT) {
    const actualPort = PORT || port;
    this.app.listen(actualPort, () => console.log(started));
  }

  public addRouter(router: Router) {
    this.app.use(router);
    this.app.use(error);
  }
}

export default App;
