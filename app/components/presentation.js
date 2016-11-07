import React from 'react';

export const InputBox = ({
    label,
    value
}) => (
    <div className="inputBox">
        <label>{label}</label>
        <input ref={value} />
    </div>
);

export const Player = ({
    first_name,
    last_name,
    onClick
}) => (
    <li>
        <span>{first_name}</span>
        <span>{last_name}</span>
        <button onClick={onClick}>remove</button>
    </li>
);

export const PlayerList = ({
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
