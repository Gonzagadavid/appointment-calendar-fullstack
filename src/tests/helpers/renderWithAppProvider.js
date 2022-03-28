import React from 'react';
import { render } from '@testing-library/react';
import AppContext from '../../contexts/app/AppContext';

const renderWithAppProvider = (ui, { providerProps, ...renderOptions }) => render(
  <AppContext.Provider value={{ ...providerProps }}>
    {' '}
    {ui}
  </AppContext.Provider>,
  renderOptions,
);

export default renderWithAppProvider;
