import { Router } from 'express';
import { validateEmail } from '../../middlewares';
import { postCode, postPassword } from '../../controllers/email';

const router = Router();

router.post('/', validateEmail, postCode);

router.post('/password', validateEmail, postPassword);

export default router;
