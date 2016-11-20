import 'whatwg-fetch';
import receivePlayers from './receivePlayers';
import { requestPlayers } from './index';

const fetchPlayers = (url) => {
    return (dispatch) => {
        dispatch(requestPlayers());
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(receivePlayers(json)));
    }
}

export default fetchPlayers;