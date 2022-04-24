import { ObjectId } from 'mongodb';

export const task = {
  _id: '6253391c4b6c6911e42b7593',
  userId: '625333e34b6c6911e42b7590',
  email: 'user@server.com',
  title: 'Tarefa 1',
  description: 'Descrição da tarefa 1',
  status: 'Programmed',
  date: '2022-04-10T16:46:08.471+00:00',
  updated: '2022-04-10T20:07:56.489Z',
};

export const tasks = [
  {
    title: 'Tarefa 1',
    status: 'Programmed',
    date: '2022-04-10T16:46:08.471+00:00',
    id: '6253391c4b6c6911e42b7593',
  },
  {
    title: 'Tarefa 2',
    status: 'Programmed',
    date: '2022-04-10T16:46:08.471+00:00',
    id: '625339394b6c6911e42b7594',
  },
];

export const reqTask = {
  userId: new ObjectId('625333e34b6c6911e42b7590'),
  email: 'user@server.com',
  title: 'Tarefa 1',
  description: 'Descrição da tarefa 1',
  status: 'Programmed',
  date: new Date('2022-04-10T16:46:08.471+00:00'),
};
