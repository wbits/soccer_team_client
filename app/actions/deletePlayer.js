import { removePlayer } from './index';

const deletePlayer = (url, player) => {
    return (dispatch) => {
        fetch(url, {    
           method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                nickname: player.nickname,
                email: player.email
            }) 
        })
        .then(dispatch(removePlayer(player)));
    }
}

export default deletePlayer;