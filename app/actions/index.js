export const ADD_PLAYER      = 'ADD_PLAYER';
export const REMOVE_PLAYER   = 'REMOVE_PLAYER';
export const FETCH_PLAYERS   = 'FETCH_PLAYERS';
export const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';

export const addPlayer      = (player) => ({ type: ADD_PLAYER, player });
export const removePlayer   = (player) => ({ type: REMOVE_PLAYER, player });
export const requestPlayers = () => ({ type: REQUEST_PLAYERS });
