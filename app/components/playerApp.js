import React from 'react';
import AddPlayer from './addplayer';
import PlayerListContainer from './playerListContainer';
import Navigation from './navigation';

const PlayerApp = () => (
    <div>
        <Navigation />
        <AddPlayer />
        <PlayerListContainer />
    </div>
);

export default PlayerApp;