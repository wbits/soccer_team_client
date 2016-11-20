import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import PlayerApp from './playerApp';
import MatchApp from './matchApp';

const Root = ({ store }) => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/players' component={PlayerApp} />
            <Route path='/matches' component={MatchApp} />
        </Router>
    </Provider>
);

export default Root;
