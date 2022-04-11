import React from 'react';
import './App.css';
import AppProvider from './contexts/app/AppProvider';
import Header from './components/Header';
import Message from './components/Menssage';
import TaskComponent from './components/TaskComponent';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Message />
        <Header />
        <TaskComponent />
        <UserComponent />
      </AppProvider>
    </div>
  );
}

export default App;
