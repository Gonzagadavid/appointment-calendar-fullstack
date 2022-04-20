import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import TaskDetails from '../../components/TaskDetails';
import renderWithAllProviders from '../helpers/renderWithAllProviders';

const appState = {
  setRenderTaskDetails: jest.fn(),
  renderTaskDetails: true,
};

const taskDetails = {
  _id: '6253391c4b6c6911e42b7593',
  userId: '625333e34b6c6911e42b7590',
  email: 'user@server.com',
  title: 'Tarefa 1',
  description: 'Descrição da tarefa 1',
  status: 'Programmed',
  date: '2022-04-10T16:46:08.471+00:00',
  updated: '2022-04-15T20:07:56.489Z',
};

const taskState = {
  taskDetails,
  setIdSelected: jest.fn(),
  editTask: jest.fn(),
  removeTask: jest.fn(),
};

describe('verifica a renderização e o funcionamento do componente TaskDetails', () => {
  it('verifica se os detalhes de uma tarefa são renderizados corretamente', () => {
    renderWithAllProviders(<TaskDetails />, appState, {}, {}, taskState);

    const title = screen.getByRole('heading', { level: 2 });

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(taskDetails.title);
    expect(screen.getByText(taskDetails.status)).toBeInTheDocument();
    expect(screen.getByText('April 10, 2022')).toBeInTheDocument();
    expect(screen.getByText('13:46')).toBeInTheDocument();
    expect(screen.getByText('April 15, 2022 17:07')).toBeInTheDocument();
  });

  it('verfica a renderização e funcionalidade dos elementos buttons', () => {
    renderWithAllProviders(<TaskDetails />, appState, {}, {}, taskState);

    const btnClose = screen.getByText('Close');
    const btnEdit = screen.getByText('Edit');
    const btnRemove = screen.getByText('Remove');

    expect(btnClose).toBeInTheDocument();
    expect(btnEdit).toBeInTheDocument();
    expect(btnRemove).toBeInTheDocument();

    userEvent.click(btnClose);

    expect(appState.setRenderTaskDetails).toBeCalledWith(false);
    expect(taskState.setIdSelected).toBeCalledWith('');

    userEvent.click(btnEdit);

    expect(taskState.editTask).toBeCalled();

    userEvent.click(btnRemove);

    expect(taskState.removeTask).toBeCalled();
  });
});
