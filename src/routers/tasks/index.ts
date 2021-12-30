import { Router } from 'express';
import authToken from '../../auth';
import { deleteTask, postTask, putTask } from '../../controllers/tasks';
import getAllTasks from '../../controllers/tasks/getAllTask';
import { validateTask } from '../../middlewares';

const router = Router();

router.get('/', authToken, getAllTasks);

router.get('/:id');

router.post('/', authToken, validateTask, postTask);

router.put('/:id', authToken, validateTask, putTask);

router.delete('/:id', authToken, deleteTask);

export default router;
