import { Router } from 'express';
import users from './users';
import login from './login';
import tasks from './tasks';
import email from './email';

const routerRoot = Router();

routerRoot.use('/users', users);

routerRoot.use('/login', login);

routerRoot.use('/tasks', tasks);

routerRoot.use('/email', email);

export default routerRoot;
