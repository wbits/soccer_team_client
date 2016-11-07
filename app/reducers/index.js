import { combineReducers } from 'redux';
import players from './players';
import applicationState from './applicationState';

const reducer = combineReducers({
    players,
    applicationState
})

export default reducer;