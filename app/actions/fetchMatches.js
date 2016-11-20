import 'whatwg-fetch';
import receiveMatches from './receiveMatches';
import { requestMatches } from './index';

const fetchMatches = (url) => {
    return (dispatch) => {
        dispatch(requestMatches());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receiveMatches(json)));
    }
}

export default fetchMatches;