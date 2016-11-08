import React from 'react';
import Player from './player';

const PlayerList = ({
    players,
    visibility,
    onRemovePlayer
}) => (
    <ul className={visibility}>
        {players.map(player =>
            <Player
                key={player.email_address}
                {...player}
                onClick={() => onRemovePlayer(player)}
            />
        )}
    </ul>
);

export default PlayerList;