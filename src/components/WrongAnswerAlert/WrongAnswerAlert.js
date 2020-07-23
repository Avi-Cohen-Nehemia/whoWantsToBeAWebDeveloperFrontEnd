import React from "react";
import Reset from "./../Reset";

const WrongAnswerAlert = ({ playerName, correctAnswer, statistics, currentDifficulty }) => (
    <>
        <p>Bad luck { playerName }, you're wrong! The right answer is { correctAnswer }</p>
        { currentDifficulty !== 1 ?
        <p>Well done though, you did better than { statistics }% of the people who played before!</p>
        : null}
        <Reset btnStyle={"winning-button"} />
    </>
)

export default WrongAnswerAlert;