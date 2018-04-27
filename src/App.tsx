/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';

import Hello from './containers/Hello';
import WebView from './components/WebView';
import { Provider } from 'react-redux';

const store = createStore(enthusiasm);

export default class App extends React.Component<object, object> {
  render() {
    return (
        <Provider store={store}>
          <Hello />
        </Provider>
    );
  }
}