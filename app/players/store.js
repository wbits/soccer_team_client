import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { fetchPlayers } from './actions';
import reducer from './reducer.js';

export const configureStore = () => {
    const store = createStore(reducer, applyMiddleware(
        thunk
    ));

    store.dispatch(fetchPlayers('http://192.168.99.100:8000/team/15dc1919-a325-4f2a-9178-949b3b36a9c0/showPlayers'));
    return store;
};