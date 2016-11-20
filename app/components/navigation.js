import React from 'react'
import { Link } from 'react-router'

const Navigation = () => (
    <div>
        <Link to="/players">Players</Link>
        <Link to="/matches">Matches</Link>
    </div>
);

export default Navigation