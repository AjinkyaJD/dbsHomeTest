/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {store} from './stores/Store';
import Home from './components/Home';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
export default App;
