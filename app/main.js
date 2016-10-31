'use strict';

var React    = require('react'),
    ReactDom = require('react-dom'),
    Ajax     = require('./ajax');

class Player extends React.Component
{
    constructor(props) {
        super(props);
    }

    getFullName() {
        return this.props.firstName + ' ' + this.props.lastName;
    }

    render() {
        return (
            <li key={this.props.key}>{this.getFullName()}</li>
        );
    }
}

class PlayerList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        var _this = this;

        Ajax.get('http://192.168.99.100:8000/team/15dc1919-a325-4f2a-9178-949b3b36a9c0/showPlayers')
            .then(JSON.parse)
            .then((result) =>
                result.players.map((player) =>
                   _this.addPlayer(player)
                );
            )
            .catch((error) => {
                console.log(error);
            })
        );
    }

    addPlayer(player) {
        this.state.players.push({
            firstName: player.first_name,
            lastName: player.last_name,
            emailAddress: player.email_address
        });
    }

    render() {
        return (
            <ul>
                {this.state.players.map((player) =>
                    <Player firstName={player.firstName}
                            lastName={player.lastName}
                            emailAddress={player.emailAddress}
                            key={player.emailAddress} />
                )}
            </ul>
        );
    }
}

ReactDom.render(
    <PlayerList />,
    document.getElementById('app')
);
