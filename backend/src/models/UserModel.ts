import DBModel from './DBModel';

class UserModel extends DBModel {
  constructor() {
    super('users');
  }

  public async findUserByEmail(email: string) {
    const user = await this.findOne({ email });
    return user;
  }
}

export default UserModel;
