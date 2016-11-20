export const ADD_PLAYER      = 'ADD_PLAYER';
export const ADD_MATCH       = 'ADD_MATCH';
export const REMOVE_PLAYER   = 'REMOVE_PLAYER';
export const CANCEL_MATCH    = 'CANCEL_MATCH';
export const FETCH_PLAYERS   = 'FETCH_PLAYERS';
export const FETCH_MATCHES   = 'FETCH_MATCHES';
export const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
export const REQUEST_MATCHES = 'REQUEST_MATCHES';
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';
export const RECEIVE_MATCHES = 'RECEIVE_MATCHES';

export const addPlayer       = (player) => ({ type: ADD_PLAYER, player });
export const removePlayer    = (player) => ({ type: REMOVE_PLAYER, player });
export const addMatch        = (match) => ({ type: ADD_MATCH, match});
export const cancelMatch     = (match) => ({ type: CANCEL_MATCH, match });
export const requestPlayers  = () => ({ type: REQUEST_PLAYERS });
export const requestMatches  = () => ({ type: REQUEST_MATCHES });
