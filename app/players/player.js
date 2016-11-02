import React from 'react';

export default class Player extends React.Component
{
    constructor(props) {
        super(props);
    }

    getFullName() {
        return this.props.firstName + ' ' + this.props.lastName;
    }

    render() {
        return (
            <span>{this.getFullName()}</span>
        );
    }
}
