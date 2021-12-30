import { ACCEPTED } from '../../constants/status';
import { TASK_REMOVED } from '../../constants/strings';
import { removeTask } from '../../services/tasks';
import { Handler, UserInfo } from '../../types';

const deleteTask: Handler = async (req, res, next) => {
  try {
    const { user, params: { id } } = req;
    const { userId } = user as UserInfo;

    await removeTask(id, userId);

    res.status(ACCEPTED).json({ message: TASK_REMOVED });
  } catch (err) {
    next(err);
  }
};

export default deleteTask;
