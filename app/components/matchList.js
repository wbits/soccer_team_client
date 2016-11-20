import React from 'react';
import Match from './match';

const MatchList = ({
    matches
}) => (
    <ul>
        {matches.map(match =>
            <Match
                key={match.match_id}
                {...match}
            />
        )}
    </ul>
);

export default MatchList;