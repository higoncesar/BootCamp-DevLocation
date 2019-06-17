import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from './styles/global';

import store from './store';

import Main from './pages/main';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
      <ToastContainer autoClose={5000} />
    </Provider>
  );
}

export default App;
