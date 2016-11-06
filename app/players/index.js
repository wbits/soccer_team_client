import thunk from 'redux-thunk';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import { fetchPlayers, addPlayer, removePlayer, savePlayer } from './actions';
import { InputBox, Player } from './containers';

const addPlayerUrl = 'http://192.168.99.100:8000/team/15dc1919-a325-4f2a-9178-949b3b36a9c0/addPlayer';

const store = createStore(reducer, applyMiddleware(
    thunk
));

class PlayerList extends React.Component
{
    constructor(props) {
        super(props);
    }

    resetValues() {
        this.first_name.value    = '';
        this.last_name.value     = '';
        this.email_address.value = '';
    }

    componentDidMount() {
        const { store } = this.props;
    }

    render() {

        const state = store.getState();

        return (
            <div>
                <ul className="playerList">
                    {state.players.map((player) => {
                        return <Player 
                            key={player.email} 
                            player={player} 
                            removePlayer={()=>store.dispatch(removePlayer({ email_address: player.email_address }))} />
                    })}
                </ul>

                <InputBox label='First name' value={node => {this.first_name = node}} />
                <InputBox label='Last name' value={node => {this.last_name = node}} />
                <InputBox label='Email' value={node => {this.email_address = node}} />

                <button onClick={() => {
                    let action = savePlayer(addPlayerUrl, {
                        first_name: this.first_name.value, 
                        last_name: this.last_name.value, 
                        email_address: this.email_address.value
                    });

                    store.dispatch(action);
                    this.resetValues();
                    
                }}>add</button>
            </div>
        );
    }
}


store.dispatch(fetchPlayers('http://192.168.99.100:8000/team/15dc1919-a325-4f2a-9178-949b3b36a9c0/showPlayers'));


const render = () => {
    ReactDom.render(
        <Provider store={store}>
            <PlayerList />
        </Provider>,
        document.getElementById('root')
    );
}

store.subscribe(render);

export default render;