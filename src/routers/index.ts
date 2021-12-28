import { Router } from 'express';
import users from './users';
import login from './login';
import tasks from './tasks';

const routerRoot = Router();

routerRoot.use('/users', users);

routerRoot.use('/login', login);

routerRoot.use('/tasks', tasks);

export default routerRoot;
