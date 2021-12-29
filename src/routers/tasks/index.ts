import { Router } from 'express';
import authToken from '../../auth';
import postTask from '../../controllers/tasks/postTask';
import { validateTask } from '../../middlewares';

const router = Router();

router.post('/', authToken, validateTask, postTask);

export default router;
