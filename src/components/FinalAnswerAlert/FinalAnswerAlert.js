import React from "react";

import Button from "./../Button";

const FinalAnswerAlert = ({  selected, handleFinalAnswer, playerName, }) => (
    <>
        <p>Host: Answer { selected === 1 ? "A" : (selected === 2 ? "B" : (selected === 3 ? "C" : "D")) }, is that your final answer { playerName }?</p>
        <Button
            text={ "Final Answer" }
            color={ "#ffc107" }
            click={ handleFinalAnswer }
            btnStyle={ "button" }
        />
    </>
)

export default FinalAnswerAlert;