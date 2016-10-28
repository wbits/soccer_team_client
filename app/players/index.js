'use strict';

var React = require('react'),
    ajax  = require('./../ajax');

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
            <li id="{this.props.emailAddress}">{this.getFullName()}</li>;
        );
    }
}

class PlayerList extends React.Component
{
    // constructor(teamId, uri = 'http://192.168.99.100:8000') {
    //     this.players = [];
    //     this.uri     = uri;
    //     this.teamId  = teamId;
    // }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchInitialData();
    }

    fetchInitialData() {
        let uri = this.props.uri + '/team/' + this.props.teamId + '/showPlayers';

        ajax.get(uri)
            .then(JSON.parse)
            .then((result) => this.load(result['players']))
            .catch((error) => {
                console.log(error);
            }
        );
    }

    load(playerData) {
        for (var i in playerData) {
            this.props.players.push(new Player(playerData[i]));
        }
    }

    render() {
        return (
            <h1>Hello</h1>
        );
        // return (
        //     <ul className="players">
        //     for (var i in this.players) {
        //         this.props.players[i].render()
        //     }
        //     </ul>
        // );
    }
}
