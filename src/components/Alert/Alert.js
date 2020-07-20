import React from "react";
import HostQuestion from "./../HostQuestion";
import Reset from "./../Reset";
import Button from "./../Button";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Alert = ({ correct, handleSubmit, correctAnswer, currentDifficulty, currentAmount, selected, handleFinalAnswer, statistics, playerName, gameOverLoaded }) => (
    <div className={currentDifficulty === 13 || correct === false ? "win-wrapper" : "alert-wrapper"}>
        <div className={currentDifficulty === 13 || correct === false ? "win-container" : "alert-container"}>   
            { !selected ?
            <HostQuestion />
            : ( selected && correct === null ?
            <>
                <p>Host: Answer { selected === 1 ? "A" : (selected === 2 ? "B" : (selected === 3 ? "C" : "D")) }, is that your final answer { playerName }?</p>
                <Button
                    text={ "Final Answer" }
                    color={ "#ffc107" }
                    click={ handleFinalAnswer }
                    btnStyle={ "button" }
                />
            </>
            : ( correct && currentDifficulty === 13 ?
            ( !gameOverLoaded ?
            <div className="spinner"><Loader type="TailSpin" color="#FFF" height={100} width={100}/></div> :
            <>
                <p>Congratulations { playerName }!<br/>
                You are a Web Developer!</p>
                <p>Well done! Only { 100 - statistics }% of players have won the game!</p>
                <Reset btnStyle={"winning-button"} />
            </>
            )
            : (correct ?
            <>
                <p>You are correct!</p>
                <Button
                    text={ "Next Question" }
                    color={ "#28a745" }
                    click={ handleSubmit }
                    btnStyle={ "button" }
                />
            </>
            : ( !gameOverLoaded ?
            <div className="spinner"><Loader type="TailSpin" color="#FFF" height={100} width={100}/></div> :
                <>
                    <p>Bad luck { playerName }, you're wrong! The right answer is { correctAnswer }</p>
                    <p>Well done though, you did better than { statistics }% of the people who played before!</p>
                    <Reset btnStyle={"winning-button"} />
                </>
            ))))}
        </div>
    </div>
)

export default Alert;