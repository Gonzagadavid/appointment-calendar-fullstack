import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import AddTask from '../../components/AddTask';
import renderWithAppProvider from '../helpers/renderWithAppProvider';

describe('verifica a renderização e o funcionamento do componente AddTask', () => {
  let renderTaskForm = false;
  const providerProps = {
    setRenderTaskForm: (bool) => { renderTaskForm = bool; }, connected: true,
  };
  it('verifica a renderização do componente', () => {
    renderWithAppProvider(<AddTask />, { providerProps });
    const btnAdd = screen.getByRole('button', { name: 'Add Task' });
    expect(btnAdd).toBeInTheDocument();
    expect(renderTaskForm).toBeFalsy();
    userEvent.click(btnAdd);
    expect(renderTaskForm).toBeTruthy();
  });
});
