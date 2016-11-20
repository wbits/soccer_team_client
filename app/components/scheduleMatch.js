import React from 'react';
import { connect } from 'react-redux';
import InputBox from './inputBox';
import Navigation from './navigation';
import ScheduleMatchForm from './scheduleMatchForm';
import { addMatch } from './../actions';

let ScheduleMatch = ({ dispatch }) => 
{ 
    return (
      <div>
        <Navigation />
        <ScheduleMatchForm onSubmit={(values) => {
            let match = {
                match_id: values.match_id,
                kickoff: values.kickoff,
                opponent: {
                    club: values.club,
                    team: values.team,
                    address: {
                        street: values.street,
                        house_number: values.house_number,
                        postal_code: values.postal_code,
                        city: values.city
                    }
                }
            }
            dispatch(addMatch(match));
        }} />
      </div>
    );
}

export default ScheduleMatch = connect()(ScheduleMatch);
