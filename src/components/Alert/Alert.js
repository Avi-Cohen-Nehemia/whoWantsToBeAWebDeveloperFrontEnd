import React from "react";
import Reset from "./../Reset";

const Alert = ({ correct, handleSubmit, correctAnswer }) => (
    <>
    { correct ? 
        <>
            <p>You're right!</p>
            <button onClick={ handleSubmit }>Next Question</button>
        </>
         :
         <>
            <p>Bad luck, you're wrong! The right answer is { correctAnswer }</p>
            <Reset/>
        </>
    }
    </>    
)


export default Alert;