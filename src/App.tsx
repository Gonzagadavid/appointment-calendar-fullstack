import React from 'react';
import './App.css';
import Home from './pages/Home';
import AppProvider from './contexts/app/AppProvider';
import Header from './components/Header';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import UserProvider from './contexts/user/UserProvider';
import Message from './components/Menssage';
import TaskProvider from './contexts/tasks/TaskProvider';
import TaskDetails from './components/TaskDetails';
import TaskForm from './components/TaskForm';
import SignCode from './components/SignCode';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Message />
        <Header />
        <TaskProvider>
          <Home />
          <TaskDetails />
          <TaskForm />
        </TaskProvider>
        <UserProvider>
          <LogIn />
          <SignUp />
          <SignCode />
        </UserProvider>
      </AppProvider>
    </div>
  );
}

export default App;
