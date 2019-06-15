import React from 'react';
import './config/ReactotronConfig';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';

import store from './store';

import Main from './pages/main';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  );
}

export default App;
