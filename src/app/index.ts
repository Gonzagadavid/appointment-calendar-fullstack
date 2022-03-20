import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { error } from '../middlewares';
import routerRoot from '../routers';

dotenv.config();

const { FRONTENDAPP } = process.env;
const origin = FRONTENDAPP;

const app = express();
app.use(cors({ origin }));
app.use(express.json());

app.use('/', routerRoot);

app.use(error);

export default app;
