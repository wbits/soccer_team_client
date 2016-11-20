import React from 'react';

const Match = ({
    match_id,
    kickoff,
    opponent
}) => (
    <div id={match_id}>
        <b>{opponent.club} {opponent.team}</b>
        <span>{kickoff}</span>
    </div>
);

export default Match;