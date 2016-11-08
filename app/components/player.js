import React from 'react';

const Player = ({
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

export default Player;
