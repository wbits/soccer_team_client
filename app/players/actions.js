import 'whatwg-fetch';

export const ADD_PLAYER      = 'ADD_PLAYER';
export const REMOVE_PLAYER   = 'REMOVE_PLAYER';
export const FETCH_PLAYERS   = 'FETCH_PLAYERS';
export const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';

export function addPlayer(player) {
    return { type: ADD_PLAYER, player }
}

export function removePlayer(player) {
    return { type: REMOVE_PLAYER, player }
}

export function savePlayer(url, player) {
    return function(dispatch) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                first_name: player.first_name,
                last_name: player.last_name,
                email: player.email_address
            })
        })
        .then(dispatch(addPlayer(player)));
    }
}

export function fetchPlayers(url) {
    return function(dispatch) {
        dispatch(requestPlayers());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receivePlayers(json)));
    }
}

function requestPlayers() {
  return {
    type: REQUEST_PLAYERS
  }
}

function receivePlayers(json) {
    return function (dispatch) {
        json.players.map((player) => {
            dispatch(addPlayer(player));
        })
    }
}
