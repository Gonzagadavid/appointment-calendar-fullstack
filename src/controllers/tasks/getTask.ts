import { OK } from '../../constants/status';
import { findTask } from '../../services/tasks';
import { Handler, UserInfo } from '../../types';

const getTask: Handler = async (req, res, next) => {
  try {
    const { params: { id }, user } = req;
    const { userId } = user as UserInfo;

    const task = await findTask(id, userId);

    res.status(OK).json(task);
  } catch (err) {
    next(err);
  }
};

export default getTask;
