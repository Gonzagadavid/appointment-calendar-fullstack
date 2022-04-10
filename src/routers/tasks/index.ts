import { Router } from 'express';
import authToken from '../../auth';
import TasksController from '../../controllers/TasksController';
import { validateTask } from '../../middlewares';

const router = Router();
const controller = new TasksController();

router.use(authToken);

router.get('/', controller.getAllTasks);

router.get('/:id', controller.getTask);

router.post('/', validateTask, controller.postTask);

router.put('/:id', validateTask, controller.putTask);

router.delete('/:id', controller.deleteTask);

export default router;
