import { OK } from '../../constants/status';
import { findAllTasks } from '../../services/tasks';
import { Handler, UserInfo } from '../../types';

const getAllTasks: Handler = async (req, res, next) => {
  try {
    const { userId } = req.user as UserInfo;

    const tasks = await findAllTasks(userId);

    res.status(OK).json({ tasks });
  } catch (err) {
    next(err);
  }
};

export default getAllTasks;
