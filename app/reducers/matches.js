import { ADD_MATCH } from './../actions';

const matches = (state = [], action) => {
    switch(action.type) {
        case ADD_MATCH:
            return [
                ...state,
                action.match
            ];
        default:
            return state;
    }
}

export default matches;