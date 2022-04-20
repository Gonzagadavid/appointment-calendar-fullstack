import { screen } from '@testing-library/react';
import React from 'react';
import TaskList from '../../components/TaskList';
import renderWithTaskProvider from '../helpers/renderWithTaskProvider';

const providerProps = {
  tasksSelected: [
    {
      id: '6253391c4b6c6911e42b7593',
      title: 'Tarefa 1',
      status: 'Programmed',
      date: '2022-04-10T16:46:08.471+00:00',
    },
    {
      id: '6253391c4b6c6911e42b7594',
      title: 'Tarefa 2',
      status: 'In progress',
      date: '2022-04-10T16:46:08.471+00:00',
    },
  ],
};

describe('verifica a renderização e o funcionamento do componente Tasklist', () => {
  it('verifica se uma lista de task é renderizada', () => {
    renderWithTaskProvider(<TaskList />, { providerProps });

    const tasks = screen.getAllByRole('listitem');
    expect(tasks).toHaveLength(2);

    providerProps.tasksSelected.forEach((task) => {
      Object.keys(task).forEach((key) => {
        if (key === 'id' || key === 'date') return;
        const value = task[key];
        expect(screen.getByText(value)).toBeInTheDocument();
      });
    });
  });

  it('verifica se uma lista de task vazia a mensagem é renderizada', () => {
    providerProps.tasksSelected = [];
    renderWithTaskProvider(<TaskList />, { providerProps });

    expect(screen.getByText('no tasks added')).toBeInTheDocument();
  });
});
