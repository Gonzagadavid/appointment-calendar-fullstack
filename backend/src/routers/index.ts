import { Router } from 'express';
import users from './users';
import tasks from './tasks';
import email from './email';

const routerRoot = Router();

routerRoot.use('/users', users);

routerRoot.use('/tasks', tasks);

routerRoot.use('/email', email);

export default routerRoot;
