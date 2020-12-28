import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import UserProvider from './providers/UserProvider';
import store from './redux/store';

ReactDOM.render(
  <UserProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </UserProvider>,
  document.getElementById('root')
);
