import React from 'react';
import { render } from '@testing-library/react';
import CalendarContext from '../../contexts/calendar/CalendarContext';
import AppContext from '../../contexts/app/AppContext';
import TaskContext from '../../contexts/tasks/TaskContext';
import UserContext from '../../contexts/user/UserContext';

const renderWithAllProviders = (ui, appState, calendarState, userState, taskState) => render(
  <AppContext.Provider value={appState}>
    <TaskContext.Provider value={taskState}>
      <UserContext.Provider value={userState}>
        <CalendarContext.Provider value={calendarState}>
          {' '}
          {ui}
        </CalendarContext.Provider>
      </UserContext.Provider>
    </TaskContext.Provider>
  </AppContext.Provider>,
);

export default renderWithAllProviders;
