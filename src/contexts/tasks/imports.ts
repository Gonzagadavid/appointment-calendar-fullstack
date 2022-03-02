import filterSelectedTasks from '../../functions/filterSelectedTasks';
import {
  useStorage, useFormInput, useAllTasks, useTask,
} from '../../hooks';
import { putTask, deleteTask, postTask } from '../../services/backend/tasks';
import AppContext from '../app/AppContext';
import TaskContext from './TaskContext';
import { CREATED, NOT_CONTENT } from '../../constants/status';
import { CALENDAR, EMPTY } from '../../constants/strings';
import { timeCrr } from '../../constants/currentDate';

export {
  useStorage, useFormInput, useAllTasks, useTask, putTask, deleteTask, postTask,
  AppContext, CREATED, NOT_CONTENT, CALENDAR, EMPTY, timeCrr, TaskContext, filterSelectedTasks,
};
