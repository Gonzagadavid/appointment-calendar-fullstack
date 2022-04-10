import { Router } from 'express';
import UserController from '../controllers/UserController';
import { validateEmail, validatePassword, validateUser } from '../middlewares';

class UserRouter {
  private router: Router;

  constructor() {
    this.router = Router();
  }

  public addRouter(controller: UserController) {
    this.router.post('/', validateUser, validatePassword, validateEmail, controller.postUsers);
    this.router.post('/login', validatePassword, controller.postLogin);
  }
}

export default UserRouter;
