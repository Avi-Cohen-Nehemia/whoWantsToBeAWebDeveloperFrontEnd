import React from "react";
import soundOn from "./../../assets/images/audio.svg";
import soundOff from "./../../assets/images/mute.svg";
import "./../../assets/css/sound.css";

const Mute = ({ isMuted, handleSound }) => (
    <>
        <img
            src={ isMuted ? soundOff : soundOn }
            onClick={ handleSound }
            alt="mute/unmute icon"
            className="sound"
        />
    </>
)

export default Mute;