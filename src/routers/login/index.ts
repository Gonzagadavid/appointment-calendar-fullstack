import { Router } from 'express';
import { postLogin } from '../../controllers/users';
import { validatePassword } from '../../middlewares';

const router = Router();

router.post('/', validatePassword, postLogin);

export default router;
