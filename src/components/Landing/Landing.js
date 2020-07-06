import React, { Component } from "react";

import { Link } from "react-router-dom";

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
            <Link to="/game">
                <button onClick={ this.handleStart }>Start Game</button>
            </Link>
        );
    }
}
  
export default Landing;
