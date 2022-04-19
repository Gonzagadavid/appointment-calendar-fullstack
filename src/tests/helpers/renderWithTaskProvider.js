import React from 'react';
import { render } from '@testing-library/react';
import TaskContext from '../../contexts/tasks/TaskContext';

const renderWithTaskProvider = (ui, { providerProps, ...renderOptions }) => render(
  <TaskContext.Provider value={{ ...providerProps }}>
    {' '}
    {ui}
  </TaskContext.Provider>,
  renderOptions,
);

export default renderWithTaskProvider;
