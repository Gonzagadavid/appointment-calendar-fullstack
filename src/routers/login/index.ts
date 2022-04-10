import { Router } from 'express';
import UserController from '../../controllers/UserController';
// import { postLogin } from '../../controllers/users';
import { validatePassword } from '../../middlewares';

const router = Router();

const controller = new UserController();

router.post('/', validatePassword, controller.postLogin);

export default router;
