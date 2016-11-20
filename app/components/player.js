import React from 'react';

const Player = ({
    nickname,
    onClick
}) => (
    <li>
        <span>{nickname}</span>
        <button onClick={onClick}>remove</button>
    </li>
);

export default Player;
