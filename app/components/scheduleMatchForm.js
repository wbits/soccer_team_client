import React from 'react';
import DateTimeInput from './dateTimeInput';
import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';
import { Field, reduxForm } from 'redux-form';

momentLocalizer(moment);

let ScheduleMatchForm = props => {
    const { handleSubmit } = props;
    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
            <legend>Match:</legend>
            <div>
              <label htmlFor="match_id">Match number:</label>
              <Field name="match_id" component="input" type="text"/>
            </div>
            <div>
              <label htmlFor="kickoff">Kickoff</label>
              <Field
                name="kickoff"
                component={DateTimeInput} />   
            </div>
        </fieldset>
        <fieldset>
            <legend>Opponent:</legend>
            <div>
              <label htmlFor="club">Club:</label>
              <Field name="club" component="input" type="text"/>
            </div>
            <div>
              <label htmlFor="team">Team:</label>
              <Field name="team" component="input" type="text"/>
            </div>
        </fieldset>
        <fieldset>
            <legend>Address:</legend>
            <div>
              <label htmlFor="street">Street:</label>
              <Field name="street" component="input" type="text"/>
              <label htmlFor="house_number">Number:</label>
              <Field name="house_number" component="input" type="text"/>
            </div>
            <div>
              <label htmlFor="postal_code">Postal code:</label>
              <Field name="postal_code" component="input" type="text"/>
              <label htmlFor="city">City:</label>
              <Field name="city" component="input" type="text"/>
            </div>
        </fieldset>
        
        <button type="submit">Submit</button>
      </form>
    );
}

ScheduleMatchForm = reduxForm({
  form: 'scheduleMatch'
})(ScheduleMatchForm);

export default ScheduleMatchForm;