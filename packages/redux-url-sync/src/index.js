import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxQuerySync from 'redux-query-sync';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { urlReduxSync } from './reducers/reducers';

/*
 * Create Redux Store
 */
const store = createStore(
  urlReduxSync,
  compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

ReduxQuerySync({
  store, // your Redux store
  params: {
    one: {
      selector: state => state.one,
      action: value => ({ type: 'TOGGLE', item: 'one' }),
      stringToValue: string => String(string) === 'true' || false,
      defaultValue: false
    },
    two: {
      selector: state => state.two,
      action: value => ({ type: 'TOGGLE', item: 'two' }),
      stringToValue: string => String(string) === 'true' || false,
      defaultValue: false
    }
  },
  // Initially set the store's state to the current location.
  initialTruth: 'location'
});

ReduxQuerySync({
  store, // your Redux store
  params: {
    three: {
      selector: state => state.three,
      action: value => ({ type: 'TOGGLE', item: 'three' }),
      stringToValue: string => String(string) === 'true' || false,
      defaultValue: false
    },
    text: {
      selector: state => state.text,
      action: value => ({ type: 'SET_TEXT', text: value }),
      defaultValue: 'default'
    }
  },
  // Initially set the store's state to the current location.
  initialTruth: 'location'
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
