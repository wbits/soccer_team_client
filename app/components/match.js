import React from 'react';
import moment from 'moment';

const Match = ({
    match_id,
    kickoff,
    opponent
}) => {
    let kickoffMoment = moment(kickoff, moment.ISO_8601);

    return (
        <li id={match_id}>
            <h4>{opponent.club} {opponent.team}</h4>
            <div className="kickoffDate">{kickoffMoment.format("dddd, MMMM Do YYYY")}</div>
            <div className="kickoffTime">{kickoffMoment.format("h:mm a")}</div>
            <hr />
            <div className="teamInfo">
                <div>{opponent.address.street} {opponent.address.house_number}</div>
                <div>{opponent.address.postal_code} {opponent.address.city}</div>
            </div>
        </li>
    );
};

export default Match;