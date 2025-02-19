import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
// const {Notifications} = require('./Notifications/Notifications');
// const {App} = require('./App/App');

// Render your App component to the 'root' element

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
