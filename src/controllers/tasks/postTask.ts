import { OK } from '../../constants/status';
import insertTask from '../../services/tasks/insertTask';
import { Handler } from '../../types';

const postTask: Handler = async (req, res, next) => {
  try {
    const { user, body } = req;

    const insertedTask = await insertTask({ ...user, ...body });

    res.status(OK).json(insertedTask);
  } catch (err) {
    next(err);
  }
};

export default postTask;
