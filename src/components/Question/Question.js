import React, { Component } from "react";

import Alert from "./../Alert";
import Reset from "./../Reset";

import "./../../assets/css/question.css";
import questionImage from "../../assets/images/questionBarsTransparent.png";

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

            answerCorrect: null,

            currentDifficulty: props.currentDifficulty,
            
        };

        this.handleAClick = this.handleAClick.bind(this);
        this.handleBClick = this.handleBClick.bind(this);
        this.handleCClick = this.handleCClick.bind(this);
        this.handleDClick = this.handleDClick.bind(this);

        this.handleGo = this.handleGo.bind(this);

    }

    handleAClick() {
        this.setState({selected: 1});
    }

    handleBClick() {
        this.setState({selected: 2});
    }

    handleCClick() {
        this.setState({selected: 3});
    }

    handleDClick() {
        this.setState({selected: 4});
    }

    handleGo() {
        let { selected, isCorrectA, isCorrectB, isCorrectC, isCorrectD } = this.state;

        if(selected===1 && isCorrectA===1 ) {
            this.setState({
                answerCorrect: true,
            })
            this.props.handleDifficulty();
        }
        else if(selected===2 && isCorrectB===1 ) {
            this.setState({
                answerCorrect: true,
            })
            this.props.handleDifficulty();
        }
        else if(selected===3 && isCorrectC===1 ) {
            this.setState({
                answerCorrect: true,
            })
            this.props.handleDifficulty();
        }
        else if(selected===4 && isCorrectD===1 ) {
            this.setState({
                answerCorrect: true,
            })
            this.props.handleDifficulty();
        } else {
            this.setState({ answerCorrect: false })
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.currentQuestion.content !== this.props.currentQuestion.content) {
          this.setState({
            playerName: this.props.playerName,
            question: this.props.currentQuestion.content,

            answerA: this.props.currentQuestion.answerA.answer,
            isCorrectA: this.props.currentQuestion.answerA.correct,

            answerB: this.props.currentQuestion.answerB.answer,
            isCorrectB: this.props.currentQuestion.answerB.correct,

            answerC: this.props.currentQuestion.answerC.answer,
            isCorrectC: this.props.currentQuestion.answerC.correct,

            answerD: this.props.currentQuestion.answerD.answer,
            isCorrectD: this.props.currentQuestion.answerD.correct,

            selected: 0,

            answerCorrect: null,

            currentDifficulty: this.props.currentDifficulty,
          })
        }
      }

    render() {
        let { answerA, answerB, answerC, answerD, selected, isCorrectA, isCorrectB, isCorrectC, isCorrectD } = this.state;


        let correctAnswer = "";

        if (isCorrectA) {
            correctAnswer = answerA;
        }
        if (isCorrectB) {
            correctAnswer = answerB;
        }
        if (isCorrectC) {
            correctAnswer = answerC;
        }
        if (isCorrectD) {
            correctAnswer = answerD;
        }
            

        return (
            <div className="question-bg">
                {/* <img className="question-img" src={ questionImage } alt="background image for questions" /> */}
                <div className="question-answers">
                    <span className="question">
                        <h2>{ this.state.question }</h2>
                    </span>
                    <span className="answer-a">
                        <h4 onClick={ this.handleAClick }
                            style={{border: selected === 1 ? "2px solid red" : null}}>
                            <span className="bullet-point">&#9830; A:</span>{ answerA }</h4>
                    </span>
                    <span className="answer-b">
                        <h4 onClick={ this.handleBClick }
                            style={{border: selected === 2 ? "2px solid red" : null}}>
                            <span className="bullet-point">&#9830; B:</span>{ answerB }</h4>
                    </span>
                    <span className="answer-c">
                        <h4 onClick={ this.handleCClick }
                            style={{border: selected === 3 ? "2px solid red" : null}}>
                                <span className="bullet-point">&#9830; C:</span>{ answerC }</h4>
                    </span>
                    <span className="answer-d">
                        <h4 onClick={ this.handleDClick }
                        style={{border: selected === 4 ? "2px solid red" : null}}>
                            <span className="bullet-point">&#9830; D:</span>{ answerD }</h4> 
                    </span>  
                </div>
                {/* <button disabled={selected === 0} 
                            onClick={ this.handleGo }>Go</button> */}
                {this.state.answerCorrect !== null ?
                <Alert
                    correct={this.state.answerCorrect}
                    correctAnswer={ correctAnswer }
                />
                : null }
            </div>
        );
    }
}
  
export default Question;