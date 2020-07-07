import React, { Component } from "react";

import { Link } from "react-router-dom";
import logo from "./../../assets/images/logoTransparent.png";

import "./../../assets/css/landing.css";

class Landing extends Component {

    constructor(props) {

        super(props);
              
        this.handleStart = this.handleStart.bind(this);

    }

    handleStart() {
        this.props.handleStart();
    }

    render() {

        return(
            <div className="landing-bg">
                <img src={ logo } alt="logo"/>
                <Link to="/game">
                    <button onClick={ this.handleStart }>Start Game</button>
                </Link>
            </div>
        );
    }
}
  
export default Landing;
