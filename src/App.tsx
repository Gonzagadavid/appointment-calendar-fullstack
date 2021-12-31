import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AppProvider from './contexts/app/AppProvider';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppProvider>
    </div>
  );
}

export default App;
