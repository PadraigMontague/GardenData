import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Navigation from './Navigation/navigation';
import { BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './Reducers/allReducers';
const store = createStore(allReducers);

ReactDOM.render(
  <BrowserRouter>
    <Router>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </Router>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
// serviceWorker.register();

