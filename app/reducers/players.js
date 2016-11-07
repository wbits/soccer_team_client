import { ADD_PLAYER, REMOVE_PLAYER } from './../actions';

const players = (state = [], action) => {
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

export default players;