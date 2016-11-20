import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchPlayers from './actions/fetchPlayers';
import reducer from './reducers';

export const configureStore = () => {
    const store = createStore(reducer, applyMiddleware(
        thunk
    ));

    store.dispatch(fetchPlayers('http://192.168.99.100:8000/team/d5cf8e25-cfa2-4b98-a40d-ece18dc0816b/players'));
    return store;
};