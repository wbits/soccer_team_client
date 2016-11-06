import { combineReducers } from 'redux';
import { FETCH_PLAYERS, ADD_PLAYER, REMOVE_PLAYER } from './actions';

function players(state = [], action) {
    switch(action.type) {
        case FETCH_PLAYERS:
            return state;
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

const reducer = combineReducers({
  players
})

export default reducer;