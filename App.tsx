/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';

import {store} from '@src/redux/store';

import ThemeProvider from '@src/styles/themeProvider';

import Home from '@src/pages/home';
import {StatusBar, useColorScheme} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <ThemeProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Home />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
