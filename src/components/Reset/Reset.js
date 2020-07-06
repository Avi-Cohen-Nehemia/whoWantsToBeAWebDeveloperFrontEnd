import React from "react";

// a component to erase all data and start over from the "create-players" page
const Reset = ({ handleReset }) => (
    <button
        onClick={ handleReset }>
        Reset
    </button>
);
export default Reset;