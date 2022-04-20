import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import TaskItemList from '../../components/TaskItemList';
import renderWithTaskProvider from '../helpers/renderWithTaskProvider';

describe('Verifica a renderização e o funcionamento do componente TaskItemList', () => {
  const providerProps = {
    setIdSelected: jest.fn(),
  };

  it('verifica se ao receber uma tarefa como props a mesma renderiza corretamente', () => {
    renderWithTaskProvider(
      <TaskItemList
        id="123"
        date="2022-04-10T16:46:08.471+00:00"
        title="Teste"
        status="In Progress"
      />,
      { providerProps },
    );

    const title = screen.getByText('Teste');
    const date = screen.getByText('13:46');
    const status = screen.getByText('In Progress');

    expect(title).toBeInTheDocument();
    expect(date).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(title.tagName).toBe('SPAN');
    expect(date.tagName).toBe('SPAN');
    expect(status.tagName).toBe('SPAN');
  });

  it('verifica se ao clicar na tarefa a tarefa entra no estado como selecionada', () => {
    renderWithTaskProvider(
      <TaskItemList
        id="123"
        date="2022-04-10T16:46:08.471+00:00"
        title="Teste"
        status="In Progress"
      />,
      { providerProps },
    );

    const task = screen.getByRole('button');

    expect(task).toBeInTheDocument();

    userEvent.click(task);

    expect(providerProps.setIdSelected).toBeCalledWith('123');
  });
});
