import React from "react";
import Reset from "./../Reset"

import logo from "./../../assets/images/logoTransparent.png";
import "./../../assets/css/landing.css";

const FourOhFour = () => (
    <div className="landing-bg">
        <img
            src={ logo }
            alt="logo"
            className="logo"
        />
        <h2 style={{ color: "white" }}>Oops! It appears you navigated to a non existing page!</h2>
        <Reset btnStyle={"winning-button"}/>
    </div>
)

export default FourOhFour;