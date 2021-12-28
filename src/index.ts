import express from 'express';
import dotenv from 'dotenv';
import error from './middlewares/error';
import routerRoot from './routers';

dotenv.config();

const { PORT } = process.env;
const started = `started in port ${PORT}`;

const app = express();

app.use('/', routerRoot);

app.use(error);
app.listen(PORT, () => console.log(started));
