import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import Shop from './pages/Shop';
import Router from './Router';
import '../src/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

