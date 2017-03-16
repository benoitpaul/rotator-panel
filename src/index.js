import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from 'react-router';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import ReduxThunk from 'redux-thunk';

import App from "./components/App.jsx";
import reducers from './reducers/reducers.js';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(ReduxPromise, ReduxThunk),
    /**
     * Conditionally add the Redux DevTools extension enhancer
     * if it is installed.
     */
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

var destination = document.querySelector("#root");
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
            </Route>
            <Route path="*" component={App} />
        </Router>
    </Provider>
    , destination);