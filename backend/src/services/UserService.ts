import generateToken from './helpers/generateToken';
import { USER_CREATED } from '../constants/strings';
import { EMAIL_ALREADY_EXISTS, USER_NOT_AUTHORIZED } from '../errors';
import UserModel from '../models/UserModel';
import { User, UserInserted, UserLogin } from '../types';

class UserService {
  private model: UserModel;

  constructor(model = new UserModel()) {
    this.model = model;
  }

  private async checkEmailExists(email: string) {
    const checkUser = await this.model.findUserByEmail(email);

    if (checkUser) throw EMAIL_ALREADY_EXISTS;
  }

  private async checkUser(email: string, password: string) {
    const user = await this.model.findUserByEmail(email);

    if (!user || password !== user.password) throw USER_NOT_AUTHORIZED;

    return user;
  }

  public async insertUser(user: User) {
    const { email } = user;

    await this.checkEmailExists(email);
    await this.model.insertOne(user);

    return { message: USER_CREATED };
  }

  public async login(userLogin: UserLogin) {
    const { email, password } = userLogin;

    const user = await this.checkUser(email, password);

    const { _id, name, lastname } = user as UserInserted;

    const userName = `${name} ${lastname}`;

    const token = generateToken({ _id, email });

    return { token, userName };
  }
}

export default UserService;
