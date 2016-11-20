import React from 'react';
import { connect } from 'react-redux';
import MatchList from './matchList';

const mapStateToProps = (state) => ({ 
    matches: state.matches
});

const mapDispatchToProps = (dispatch) => ({});

const MatchListContainer = connect(
    mapStateToProps,
    mapDispatchToProps        
)(MatchList);

export default MatchListContainer;