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
    player,
    removePlayer
}) => (
    <li key={player.email_address}>
        <span>{player.first_name}</span>
        <span>{player.last_name}</span>
        <button onClick={removePlayer}>remove</button>
    </li>
);
