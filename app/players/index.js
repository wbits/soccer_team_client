import React from 'react';
// import Ajax  from'./../ajax';
import Player from './player';

export default class PlayerList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        const result = {
            'players': [
                {'first_name': 'John', 'last_name': 'Doe', 'email_address': 'john@doe.nl'},
                {'first_name': 'Frank', 'last_name': 'Williams', 'email_address': 'frankwilliams@foo.bar'},
                {'first_name': 'Jane', 'last_name': 'Doe', 'email_address': 'jane@doe.foo'}
            ]
        };

        result.players.map((player) =>
           this.addPlayer(player)
        );

        // Ajax.get('http://192.168.99.100:8000/team/15dc1919-a325-4f2a-9178-949b3b36a9c0/showPlayers')
        //     .then(JSON.parse)
        //     .then((result) =>
        //         result.players.map((player) =>
        //            _this.addPlayer(player)
        //         );
        //     )
        //     .catch((error) => {
        //         console.log(error);
        //     })
        // );
    }

    addPlayer(player) {
        let state = this.state;

        state.players.push({
            firstName: player.first_name,
            lastName: player.last_name,
            emailAddress: player.email_address
        });

        this.setState(state);
    }

    render() {

        const renderPlayer = (player) => {
            return (
                <li key={player.emailAddress}>
                    <Player firstName={player.firstName}
                            lastName={player.lastName}
                            emailAddress={player.emailAddress} />
                </li>
            )
        };

        return (
            <ul className="playerList">
                {this.state.players.map(renderPlayer)}
            </ul>  
        );
    }
}
