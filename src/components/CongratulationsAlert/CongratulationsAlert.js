import React from "react";

import Reset from "./../Reset";


const CongratulationsAlert = ({ statistics, playerName }) => (
    <>
        <p>Congratulations { playerName }!<br/>
        You are a Web Developer!</p>
        <p>Well done! Only { 100 - statistics }% of players have won the game!</p>
        <Reset btnStyle={"winning-button"} />
    </>
)

export default CongratulationsAlert;