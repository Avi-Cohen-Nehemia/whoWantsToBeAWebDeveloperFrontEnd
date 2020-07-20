import React from "react";
import HostQuestion from "./../HostQuestion";
import FinalAnswerAlert from "./../FinalAnswerAlert";
import CongratulationsAlert from "./../CongratulationsAlert";
import CorrectAnswerAlert from "../CorrectAnswerAlert";
import WrongAnswerAlert from "../WrongAnswerAlert";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Alert = ({ correct, handleSubmit, correctAnswer, currentDifficulty, selected, handleFinalAnswer, gameOverLoaded }) => (
    <div className={currentDifficulty === 13 || correct === false ? "win-wrapper" : "alert-wrapper"}>
        <div className={currentDifficulty === 13 || correct === false ? "win-container" : "alert-container"}>   
            { !selected ?
            <HostQuestion />
            : ( selected && correct === null ?
            <FinalAnswerAlert 
                selected={selected}
                handleFinalAnswer={ handleFinalAnswer } />
            : ( correct && currentDifficulty === 13 ?
            ( !gameOverLoaded ?
            <div className="spinner"><Loader type="TailSpin" color="#FFF" height={100} width={100}/></div>
            : <CongratulationsAlert />
            )
            : (correct ?
            <CorrectAnswerAlert handleSubmit={ handleSubmit }/>
            : ( !gameOverLoaded ?
            <div className="spinner"><Loader type="TailSpin" color="#FFF" height={100} width={100}/></div> :
            <WrongAnswerAlert correctAnswer={ correctAnswer }/>
            ))))}
        </div>
    </div>
)

export default Alert;