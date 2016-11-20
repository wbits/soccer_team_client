import React from 'react';
import { render } from 'react-dom';
import 'react-widgets/lib/less/react-widgets.less';
import DateTimePicker from'react-widgets/lib/DateTimePicker';
import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';

class ScheduleMatchForm extends React.Component {
  constructor(props) {
    super(props);
    
    this.handleClubChange    = this.handleClubChange.bind(this);
    this.handleTeamChange    = this.handleTeamChange.bind(this);
    this.handleKickoffChange = this.handleKickoffChange.bind(this);
    this.handleMatchIdChange = this.handleMatchIdChange.bind(this);
    this.handleSubmit        = this.handleSubmit.bind(this);

    momentLocalizer(moment);

    let address = {
        street: '',
        house_number: '',
        postal_code: '',
        city: ''
    }

    let opponent = {
        club: '',
        team: '',
        address    
    }

    this.state = {
        match_id: '', 
        kickoff: '',
        opponent
    };
  }

  handleClubChange(e) {
    this.handleChange('club', e.target.value);
  }

  handleTeamChange(e) {
    this.handleChange('team', e.target.value);
  }

  handleKickoffChange(value) {
    this.handleChange('kickoff', value);
  }

  handleMatchIdChange(e) {
    this.handleChange('match_id', e.target.value);
  }

  handleChange(key, value)
  {
    let state = this.state;
    switch (key) {
        case 'match_id':
            state.match_id = value;
            break;
        case 'kickoff':
            state.kickoff = moment(value, moment.ISO_8601).format();
            break;
        case 'club':
            state.opponent.club = value;
            break;
        case 'team':
            state.opponent.team = value;
            break;
    }

    this.setState(state);
  }


  handleSubmit(e) {
    e.preventDefault();

    console.log(this.state);    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Match number:
          <input type="text" value={this.state.opponent.match_id} onChange={this.handleMatchIdChange} />
        </label>
        <label>
          Club:
          <input type="text" value={this.state.opponent.club} onChange={this.handleClubChange} />
        </label>
        <label>
          Team:
          <input type="text" value={this.state.opponent.team} onChange={this.handleTeamChange} />
        </label>
        <label>
          Kickoff:
        <DateTimePicker onChange={this.handleKickoffChange.bind()} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ScheduleMatchForm;