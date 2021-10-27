import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LocaleProvider, { LocaleContext } from './context/localeContext';
import './style.css';

ReactDOM.render(
  <LocaleProvider>
    <App />
  </LocaleProvider>,
  document.getElementById('root')
);
