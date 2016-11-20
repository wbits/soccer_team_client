import { addPlayer } from './index';

const receivePlayers = (json) => {
    let playersArray = (typeof json.players === 'object') ? Object.values(json.players) : json.players;
    return (dispatch) => {
        playersArray.map((player) => {
            dispatch(addPlayer(player));
        })
    }
}

export default receivePlayers;