import React from "react";
import Button from "./../Button";

import { Link } from "react-router-dom";

// a component to erase all data and start over from the "create-players" page
const Reset = ({ handleReset, btnStyle }) => (
    <Link to="/">
        <Button
            click={ handleReset }
            text={ "Start Over" }
            color={ "#dc3545" }
            btnStyle={ btnStyle }
        />
    </Link>
);
export default Reset;

