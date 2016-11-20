import { addPlayer } from './index'

const savePlayer = (url, player) => {
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
        .then(dispatch(addPlayer(player)));
    }
}

export default savePlayer;