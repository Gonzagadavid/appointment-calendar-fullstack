import React from 'react';
import { render } from '@testing-library/react';
import CalendarContext from '../../contexts/calendar/CalendarContext';

const renderWithCalendarProviders = (ui, { providerProps, ...renderOptions }) => render(
  <CalendarContext.Provider value={{ ...providerProps }}>
    {' '}
    {ui}
  </CalendarContext.Provider>,
  renderOptions,
);

export default renderWithCalendarProviders;
