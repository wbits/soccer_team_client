import { ADD_PLAYER, REQUEST_PLAYERS } from './../actions';

export const STATE_FETCH_PLAYERS   = 'STATE_FETCH_PLAYERS';
export const STATE_SAVE_PLAYER     = 'STATE_SAVE_PLAYER';
export const STATE_DELETE_PLAYER   = 'STATE_DELETE_PLAYER';
export const STATE_NO_INTERACTION  = 'STATE_NO_INTERACTION';
export const STATE_SERVER_ERROR    = 'STATE_SERVER_ERROR;'

const applicationState = (state = STATE_FETCH_PLAYERS, action) => {
    switch(action.type) {
        case REQUEST_PLAYERS:
            return STATE_FETCH_PLAYERS;
        case ADD_PLAYER:
            return STATE_NO_INTERACTION;
        default:
            return state;
    }
}

export default applicationState;