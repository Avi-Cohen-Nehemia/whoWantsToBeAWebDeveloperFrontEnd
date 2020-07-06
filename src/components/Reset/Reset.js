import React from "react";

import { Link } from "react-router-dom";

// a component to erase all data and start over from the "create-players" page
const Reset = ({ handleReset }) => (
    <Link to="/">
        <button
            onClick={ handleReset }>
            Reset
        </button>
    </Link>
);
export default Reset;