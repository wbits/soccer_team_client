import React from 'react';
import { connect } from 'react-redux';
import savePlayer from './../actions/savePlayer';
import InputBox from './inputBox';

const addPlayerUrl = 'http://192.168.99.100:8000/team/d5cf8e25-cfa2-4b98-a40d-ece18dc0816b/addPlayer';

let AddPlayer = ({ dispatch }) => {
    let nickname;
    let email;

    return (
        <div>
            <InputBox label='Nickname' value={node => nickname = node} />
            <InputBox label='Email' value={node => email = node} />

            <button 
                onClick={() => {
                    let action = savePlayer(addPlayerUrl, { 
                        nickname: nickname.value, 
                        email: email.value
                    });
                    
                    dispatch(action);
                    nickname.value = '';
                    email.value = '';
                }}>
                Add player
            </button>
        </div>
    );
};

export default AddPlayer = connect()(AddPlayer);