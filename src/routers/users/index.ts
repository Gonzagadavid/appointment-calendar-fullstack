import { Router } from 'express';
import postUsers from '../../controllers/users';
import { validateEmail, validateUser } from '../../middlewares';

const router = Router();

router.post('/', validateUser, validateEmail, postUsers);

export default router;
