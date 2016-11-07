import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { fetchPlayers } from './actions';
import AddPlayer from './components/addplayer';
import PlayerListContainer from './components/PlayerListContainer';

const store = createStore(reducer, applyMiddleware(
    thunk
));

store.dispatch(fetchPlayers('http://192.168.99.100:8000/team/15dc1919-a325-4f2a-9178-949b3b36a9c0/showPlayers'));

export const PlayerApp = () => (
    <div>
        <AddPlayer />
        <PlayerListContainer />
    </div>
);
