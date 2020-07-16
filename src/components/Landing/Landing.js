import React, { Component } from "react";

import { Link } from "react-router-dom";
import Sound from 'react-sound';
import Mute from "./../Mute";
import openingTheme from "./../../assets/sounds/openingTheme.mp3";
import logo from "./../../assets/images/logoTransparent.png";
import "./../../assets/css/landing.css";

class Landing extends Component {

    constructor(props) {

        super(props);

        this.state = {
            playerName: "",
        }
              
        this.handleStart = this.handleStart.bind(this);
        this.handlePlayerName = this.handlePlayerName.bind(this);
    }

    handlePlayerName(e) {
        this.setState({ playerName: e.currentTarget.value })
    }

    handleStart() {
        this.props.handleStart({...this.state});
    }

    render() {

        return(
            <div className="landing-bg">
                <Mute/>
                <img
                    src={ logo }
                    alt="logo"
                    className="logo"
                />
                <form className="landing-form">
                    <label
                        className="label"
                        htmlFor="name"
                        style={{ color: "white" }}
                    >
                        Enter Name
                    </label>
                    <input
                        className="input"
                        type="text"
                        value={ this.playerName }
                        onChange={ this.handlePlayerName }
                        id="name"
                    />
                </form>
                <Link to="/game" className="landing-link">
                    <button
                        className="landing-btn"
                        onClick={ this.handleStart }
                    >
                        Start Game
                    </button>
                </Link>
                { !this.props.isMuted ?
                <Sound
                    url={ openingTheme }
                    playStatus={ Sound.status.PLAYING }
                    autoLoad={ true }
                    loop={ true }
                />
                : null }
            </div>
        );
    }
}
  
export default Landing;
