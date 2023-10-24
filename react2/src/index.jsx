import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import Shop from './Shop';
import './style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Shop />
  </React.StrictMode>
);

