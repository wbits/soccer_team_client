import React from 'react';
import { connect } from 'react-redux';
import { PlayerList } from './presentation';
import { deletePlayer } from './../actions';

const url = 'http://192.168.99.100:8000/team/15dc1919-a325-4f2a-9178-949b3b36a9c0/removePlayer';

const mapStateToPlayerProps = (state) => { 
    return { 
        players: state.players,
        visibility: state.visibility
    }; 
}

const mapDispatchToPlayerProps = (dispatch) => {
    return { onRemovePlayer: (player) => {
        dispatch(deletePlayer(url, player));
    }};
}

const PlayerListContainer = connect(
    mapStateToPlayerProps,
    mapDispatchToPlayerProps        
)(PlayerList);

export default PlayerListContainer;