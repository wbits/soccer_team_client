'use strict';

var React    = require('react'),
	ReactDom = require('react-dom'),
	Ajax	 = require('./ajax');

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
		Ajax.get('http://192.168.99.100:8000/team/15dc1919-a325-4f2a-9178-949b3b36a9c0/showPlayers')
            .then(JSON.parse)
            .then((result) =>
            	this.setState({players: result.players})
        	)
            .catch((error) => {
                console.log(error);
            })
        );
	}  

	render() {
		return (
			<ul>
                {this.state.players.map((player) =>
                    <Player firstName={player.first_name}
                            lastName={player.last_name}
                            emailAddress={player.email_address}
                            key={player.email_address} />
                )}
            </ul>
		);
	}

}

ReactDom.render(
    <PlayerList />,
    document.getElementById('app')
);
