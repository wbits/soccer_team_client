import React from 'react';
import { connect } from 'react-redux';
import { savePlayer } from './../actions';
import { InputBox } from './presentation';

const addPlayerUrl = 'http://192.168.99.100:8000/team/15dc1919-a325-4f2a-9178-949b3b36a9c0/addPlayer';

let AddPlayer = ({ dispatch }) => {
    let firstName;
    let lastName;
    let email;

    return (
        <div>
            <InputBox label='First name' value={node => firstName = node} />
            <InputBox label='Last name' value={node => lastName = node} />
            <InputBox label='Email' value={node => email = node} />

            <button 
                onClick={() => {
                    let action = savePlayer(addPlayerUrl, {
                        first_name: firstName.value, 
                        last_name: lastName.value, 
                        email_address: email.value
                    });
                    
                    dispatch(action);
                    firstName.value = '';
                    lastName.value = '';
                    email.value = '';
                }}>
                Add player
            </button>
        </div>
    );
};

export default AddPlayer = connect()(AddPlayer);