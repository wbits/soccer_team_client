import { combineReducers } from 'redux';
import players from './players';
import matches from './matches';
import applicationState from './applicationState';

const reducer = combineReducers({
    players,
    matches,
    applicationState
})

export default reducer;