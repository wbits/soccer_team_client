import { addMatch } from './index';

const receiveMatches = (json) => {
    let matchesArray = (typeof json.matches === 'object') ? Object.values(json.matches) : json.matches;

    return (dispatch) => {
        matchesArray.map((match) => {
            dispatch(addMatch(match));
        })
    }
}

export default receiveMatches;