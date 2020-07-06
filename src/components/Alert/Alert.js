import React from "react";

const Alert = ({ correct, handleSubmit }) => (
    <>
    { correct ? 
        <>
            <p>You're right!</p>
            <button onClick={ handleSubmit }>Next Question</button>
        </>
         :
         <>
            <p>Bad luck, you're wrong!</p>
            <button></button>
        </>
    }
    </>    
)


export default Alert;