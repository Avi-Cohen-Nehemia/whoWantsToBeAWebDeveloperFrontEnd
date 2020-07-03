import React, { Component } from "react";

class Question extends Component {

    constructor(props) {

        super(props);

        this.state = {
            playerName: props.playerName,
            question: props.currentQuestion.content,

            answerA: props.currentQuestion.answerA.answer,
            isCorrectA: props.currentQuestion.answerA.correct,

            answerB: props.currentQuestion.answerB.answer,
            isCorrectB: props.currentQuestion.answerB.correct,

            answerC: props.currentQuestion.answerC.answer,
            isCorrectC: props.currentQuestion.answerC.correct,

            answerD: props.currentQuestion.answerD.answer,
            isCorrectD: props.currentQuestion.answerD.correct,

            selected: 0,
        };

        // this.handlePlayerName = this.handlePlayerName.bind(this);
    }

    // handlePlayerName(e) {
    //     this.setState({ playerName: e.currentTarget.value });
    // }

    render() {
        return(
            <>
                <h2></h2>
                <h4></h4>
                <h4></h4>
                <h4></h4>
                <h4></h4>
            </>
        );
    }
}
  
export default Question;