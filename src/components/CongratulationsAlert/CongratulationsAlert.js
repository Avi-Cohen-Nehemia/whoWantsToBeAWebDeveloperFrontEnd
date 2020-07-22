import React from "react";
import Sound from 'react-sound';

import Reset from "./../Reset";
import Fireworks from "./../Fireworks";
import applause from "./../../assets/sounds/crowdapplause.mp3";

const CongratulationsAlert = ({ statistics, playerName }) => (
    <>
        <p>Congratulations { playerName }!<br/>
        You are a Web Developer!</p>
        <p>Well done! Only { 100 - statistics }% of players have won the game!</p>
        <Reset btnStyle={"winning-button"} />
        <Fireworks />
        <Sound
            url={ applause }
            playStatus={ Sound.status.PLAYING }
            autoLoad={ true }
        />
    </>
)

export default CongratulationsAlert;