import React from "react";
import HostQuestion from "./../HostQuestion";
import FinalAnswerAlert from "./../FinalAnswerAlert";
import CongratulationsAlert from "./../CongratulationsAlert";
import CorrectAnswerAlert from "./../CorrectAnswerAlert";
import WrongAnswerAlert from "./../WrongAnswerAlert";
import Spinner from "./../Spinner";

const Alert = ({ correct, handleSubmit, correctAnswer, currentDifficulty, selected, handleFinalAnswer, gameOverLoaded }) => (
    <div className={ currentDifficulty === 13 || gameOverLoaded === true ? "win-wrapper" : "alert-wrapper" }>
        <div className={ currentDifficulty === 13 || gameOverLoaded === true ? "win-container" : "alert-container" }>
            {
            /*if the user refreshed after getting a question wrong*/
            gameOverLoaded ? <WrongAnswerAlert correctAnswer={ correctAnswer }/>

            /*if they didn't select an asnwer*/
            : (!selected ?
            <HostQuestion/>

            /*if they selected an asnwer but did not confirm yet*/
            : (selected && correct === null ? <FinalAnswerAlert selected={ selected } handleFinalAnswer={ handleFinalAnswer }/>

            /*if they confirmed and are correct, and it's the last question*/
            : (correct && currentDifficulty === 13 ? (!gameOverLoaded ? <Spinner/> : <CongratulationsAlert/>)

            /*if they confirmed and are correct but not last question*/
            : (correct ? <CorrectAnswerAlert handleSubmit={ handleSubmit }/>
            
            /*if they are wrong*/
            : (!gameOverLoaded ? <Spinner/> : <WrongAnswerAlert correctAnswer={ correctAnswer }/>)
            ))))}
        </div>
    </div>
)

export default Alert;