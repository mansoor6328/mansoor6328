import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './configStore';
import LocaleProvider from './context/localeContext';
import './style.css';

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root'),
);
