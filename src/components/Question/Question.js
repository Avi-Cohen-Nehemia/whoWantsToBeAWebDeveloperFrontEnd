import React, { Component } from "react";
import Alert from "./../Alert";
import "./../../assets/css/question.css";

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

        this.handleFinalAnswer = this.handleFinalAnswer.bind(this);

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

    handleFinalAnswer() {
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
        let { answerA, answerB, answerC, answerD, selected, isCorrectA, isCorrectB, isCorrectC, isCorrectD, question } = this.state;


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
          
        let longAnswers = (answerA.length > 25 || answerB.length > 25 || answerC.length > 25 || answerD.length > 25);

        let longAnswersMobile = (answerA.length > 18 || answerB.length > 18 || answerC.length > 18 || answerD.length > 18);

        let longQuestions = question.length > 60;

        return (
            <div className="question-bg">
                <Alert
                    selected={ selected }
                    handleFinalAnswer={ this.handleFinalAnswer }
                    correct={this.state.answerCorrect}  
                    correctAnswer={ correctAnswer }
                />
                <div className="question-answers">
                    <span className="question">
                        <h2 className={ longQuestions ? "long-questions" : "" }>{ question }</h2>
                    </span>
                    <span className="answer-a" onClick={ this.handleAClick }>
                        <h4 className={"answers" + (longAnswers ? " long-answers" : ( longAnswersMobile ? " long-answers-mobile" : "" ))}
                            style={{color: selected === 1 ? "rgb(224, 215, 78)" : "white"}}>
                            <span className="bullet-point"><span>&#9830; </span>A:</span><span>{ answerA }</span></h4>
                    </span>
                    <span className="answer-b" onClick={ this.handleBClick }>
                        <h4 className={"answers" + (longAnswers ? " long-answers" : ( longAnswersMobile ? " long-answers-mobile" : "" ))}
                            style={{color: selected === 2 ? "rgb(224, 215, 78)" : "white"}}>
                            <span className="bullet-point"><span>&#9830; </span>B:</span><span>{ answerB }</span></h4>
                    </span>
                    <span className="answer-c" onClick={ this.handleCClick }>
                        <h4 className={"answers" + (longAnswers ? " long-answers" : ( longAnswersMobile ? " long-answers-mobile" : "" ))}
                            style={{color: selected === 3 ? "rgb(224, 215, 78)" : "white"}}>
                                <span className="bullet-point"><span>&#9830; </span>C:</span><span>{ answerC }</span></h4>
                    </span>
                    <span className="answer-d" onClick={ this.handleDClick }>
                        <h4 className={"answers" + (longAnswers ? " long-answers" : ( longAnswersMobile ? " long-answers-mobile" : "" ))}
                            style={{color: selected === 4 ? "rgb(224, 215, 78)" : "white"}}>
                            <span className="bullet-point"><span>&#9830; </span>D:</span><span>{ answerD }</span></h4>
                    </span>  
                </div>
            </div>
        );
    }
}
  
export default Question;