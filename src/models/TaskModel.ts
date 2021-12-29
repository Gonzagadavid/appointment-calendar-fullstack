import DBModel from './DBModel';

class TaskModel extends DBModel {
  constructor() {
    super('tasks');
  }
}

export default TaskModel;
