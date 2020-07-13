import React from "react";
import Reset from "./../Reset";
import Button from "./../Button";

const Alert = ({ correct, handleSubmit, correctAnswer, currentDifficulty, currentAmount, selected, handleFinalAnswer }) => (
    <div className="alert-wrapper">
        <div className="alert-container">
            { !selected ? <p>Host: Question number { currentDifficulty } for £{ currentAmount }</p>
            : ( selected && correct === null ?
            <>
                <p>Host: Answer { selected === 1 ? "A" : (selected === 2 ? "B" : (selected === 3 ? "C" : "D")) }, is that your final answer?</p>
                <Button
                    text={ "Final Answer" }
                    color={ "#ffc107" }
                    click={ handleFinalAnswer }
                />
            </>
            : ( correct && currentDifficulty === 9 ?
            <><p>Well done! You beat the game!</p><Reset/></> :
            (correct ?
            <>
                <p>You are correct!</p>
                <Button
                    text={ "Next Question" }
                    color={ "#28a745" }
                    click={ handleSubmit }
                />
            </>
            : <><p>Bad luck, you're wrong! The right answer is { correctAnswer }</p><Reset/></>)))}
        </div>
    </div>
)

export default Alert;