import 'whatwg-fetch';

export const ADD_PLAYER      = 'ADD_PLAYER';
export const REMOVE_PLAYER   = 'REMOVE_PLAYER';
export const FETCH_PLAYERS   = 'FETCH_PLAYERS';
export const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';

export const addPlayer      = (player) => ({ type: ADD_PLAYER, player });
export const removePlayer   = (player) => ({ type: REMOVE_PLAYER, player });
export const requestPlayers = () => ({ type: REQUEST_PLAYERS });

export const fetchPlayers = (url) => {
    return (dispatch) => {
        dispatch(requestPlayers());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receivePlayers(json)));
    }
}

export const receivePlayers = (json) => {
    let playersArray = (typeof json.players === 'object') ? Object.values(json.players) : json.players;
    return (dispatch) => {
        playersArray.map((player) => {
            dispatch(addPlayer(player));
        })
    }
}
