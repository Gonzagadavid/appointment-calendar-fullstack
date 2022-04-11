import { Router } from 'express';
import { validateEmail } from '../../middlewares';
import EmailController from '../../controllers/EmailController';

const router = Router();
const controller = new EmailController();

router.post('/', validateEmail, controller.postCode);

router.post('/password', validateEmail, controller.postPassword);

export default router;
