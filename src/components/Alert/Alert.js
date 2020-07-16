import React from "react";
import Reset from "./../Reset";
import Button from "./../Button";

const Alert = ({ correct, handleSubmit, correctAnswer, currentDifficulty, currentAmount, selected, handleFinalAnswer }) => (
    <div className={currentDifficulty === 13 ? "win-wrapper" : "alert-wrapper"}>
        <div className={currentDifficulty === 13 ? "win-container" : "alert-container"}>
            { !selected ? <p>Host: Question number { currentDifficulty } for £{ currentAmount }</p>
            : ( selected && correct === null ?
            <>
                <p>Host: Answer { selected === 1 ? "A" : (selected === 2 ? "B" : (selected === 3 ? "C" : "D")) }, is that your final answer?</p>
                <Button
                    text={ "Final Answer" }
                    color={ "#ffc107" }
                    click={ handleFinalAnswer }
                    btnStyle={ "button" }
                />
            </>
            : ( correct && currentDifficulty === 13 ?
            <><p>Congratulations!<br/>You are a Web Developer!</p>
                    <Reset btnStyle={"winning-button"} /></> :
            (correct ?
            <>
                <p>You are correct!</p>
                <Button
                    text={ "Next Question" }
                    color={ "#28a745" }
                    click={ handleSubmit }
                    btnStyle={ "button" }
                />
            </>
            : <><p>Bad luck, you're wrong! The right answer is { correctAnswer }</p><Reset btnStyle={"button"} /></>)))}
        </div>
    </div>
)

export default Alert;