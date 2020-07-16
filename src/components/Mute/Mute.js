import React from "react";
import soundOn from "./../../assets/images/audio.svg";
import soundOff from "./../../assets/images/mute.svg";

const Mute = ({ isMuted, handleSound }) => (
    <>
        <img
            src={ isMuted ? soundOff : soundOn }
            onClick={ handleSound }
            alt="mute/unmute icon"
            style={{
                position: "absolute",
                top: "5%",
                left: "5%",
                width: "50px",
                height: "50px",
                filter: "invert(100%) sepia(10%) saturate(3785%) hue-rotate(260deg) brightness(125%) contrast(109%)",
            }}
        />
    </>
)

export default Mute;