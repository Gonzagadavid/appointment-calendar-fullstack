import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  root,
);

export default root;
