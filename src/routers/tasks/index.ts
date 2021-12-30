import { Router } from 'express';
import authToken from '../../auth';
import { postTask, putTask } from '../../controllers/tasks';
import { validateTask } from '../../middlewares';

const router = Router();

router.post('/', authToken, validateTask, postTask);

router.put('/:id', authToken, validateTask, putTask);

export default router;
