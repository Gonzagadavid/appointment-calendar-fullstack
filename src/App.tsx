import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import AppProvider from './contexts/app/AppProvider';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
