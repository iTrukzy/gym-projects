import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import MyContext from './context/MyContext'


ReactDOM.render(
  <React.StrictMode>
    <MyContext>
        <App />
    </MyContext>
  </React.StrictMode>,
  document.getElementById('root')
);

