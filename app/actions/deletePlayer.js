import { removePlayer } from './index';

const deletePlayer = (url, player) => {
    return (dispatch) => {
        fetch(url, {    
           method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                first_name: player.first_name,
                last_name: player.last_name,
                email: player.email_address
            }) 
        })
        .then(dispatch(removePlayer(player)));
    }
}

export default deletePlayer;