import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppProvider from './contexts/app/AppProvider';
import Header from './components/Header';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import UserProvider from './contexts/user/UserProvider';
import Message from './components/Menssage';
import TaskProvider from './contexts/tasks/TaskProvider';
import TaskDetails from './pages/TaskDetails';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Message />
        <Header />
        <TaskProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/task-details" element={<TaskDetails />} />
          </Routes>
        </TaskProvider>
        <UserProvider>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </UserProvider>
      </AppProvider>
    </div>
  );
}

export default App;
