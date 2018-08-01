import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import reducers from './src/reducers'
import RouterComponent from './src/Router'


const store = createStore(reducers, {}, applyMiddleware(
  thunk,
  logger
));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}


