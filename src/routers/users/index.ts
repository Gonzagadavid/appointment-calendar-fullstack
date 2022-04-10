import { Router } from 'express';
import UserController from '../../controllers/UserController';
import { validateEmail, validatePassword, validateUser } from '../../middlewares';

const router = Router();
const controller = new UserController();

router.post('/', validateUser, validatePassword, validateEmail, controller.postUsers);

export default router;
