import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import PlayerApp from './app';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/players' component={PlayerApp} />
        </Router>
    </Provider>
);

export default Root;