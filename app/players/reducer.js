import { combineReducers } from 'redux';
import { REQUEST_PLAYERS, ADD_PLAYER, REMOVE_PLAYER } from './actions';

const VISIBILITY_FETCHING_PLAYERS    = 'hidden';
const VISIBILITY_LOADING_SUCCESSFULL = 'visible';

function players(state = [], action) {
    switch(action.type) {
        case ADD_PLAYER:
            return [
                ...state,
                action.player
            ];
        case REMOVE_PLAYER:
            return state.filter((player) => {
                return player.email_address !== action.player.email_address;
            });
        default:
            return state;
    }
}

function visibility(state = VISIBILITY_FETCHING_PLAYERS, action) {
    switch(action.type) {
        case REQUEST_PLAYERS:
            return VISIBILITY_FETCHING_PLAYERS;
        case ADD_PLAYER:
            return VISIBILITY_LOADING_SUCCESSFULL;
        default:
            return state;
    }
}

const reducer = combineReducers({
    players,
    visibility
})

export default reducer;