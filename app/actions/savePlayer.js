import { addPlayer } from './index'

const savePlayer = (url, player) => {
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
        .then(dispatch(addPlayer(player)));
    }
}

export default savePlayer;