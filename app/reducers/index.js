import { combineReducers } from 'redux';
import players from './players';
import matches from './matches';
import applicationState from './applicationState';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
    players,
    matches,
    applicationState,
    form: formReducer
})

export default reducer;