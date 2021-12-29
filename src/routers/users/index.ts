import { Router } from 'express';
import { postUsers } from '../../controllers/users';
import { validateEmail, validatePassword, validateUser } from '../../middlewares';

const router = Router();

router.post('/', validateUser, validatePassword, validateEmail, postUsers);

export default router;
