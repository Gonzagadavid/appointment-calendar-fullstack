import { Router } from 'express';
import authToken from '../../auth';

const router = Router();

router.post('/', authToken);

export default router;
