import React from 'react';
import { connect } from 'react-redux';
import InputBox from './inputBox';
import Navigation from './navigation';
import ScheduleMatchForm from './scheduleMatchForm';

class ScheduleMatch extends React.Component 
{
  handleSubmit(values) {
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

    console.log(match);
  }

  render() {
    return (
      <div>
        <Navigation />
        <ScheduleMatchForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default ScheduleMatch = connect()(ScheduleMatch);
