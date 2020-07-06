import React, { Component } from "react";

class Landing extends Component {

    constructor(props) {

        super(props);

        this.state = {
            
        };

        
        this.handleStart = this.handleStart.bind(this);

    }

    handleStart() {
            this.props.handleStart();
    }

    render() {

        return(
            <button onClick={ this.handleStart }>Start Game</button>
        );
    }
}
  
export default Landing;
