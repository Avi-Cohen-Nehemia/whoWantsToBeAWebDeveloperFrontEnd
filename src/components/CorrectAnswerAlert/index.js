import React from "react";
import Button from "../Button";

const CorrectAlert = ({ handleSubmit }) => (
    <>
        <p>You are correct!</p>
        <Button
            text={ "Next Question" }
            color={ "#28a745" }
            click={ handleSubmit }
            btnStyle={ "button" }
        />
    </>
)

export default CorrectAlert;