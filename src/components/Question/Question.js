import React, { Component } from "react";
import Alert from "./../Alert";
import Sound from 'react-sound';
import Mute from "../Mute";

import letsPlay from "./../../assets/sounds/letsPlay.mp3";
import upTo1000music from "./../../assets/sounds/upTo1000music.mp3";
import upTo32000music from "./../../assets/sounds/upTo32000music.mp3";
import finalAnswerSound from "./../../assets/sounds/finalAnswer.mp3";
import correctAnswerSound from "./../../assets/sounds/correctAnswer.mp3";
import wrongAnswerSound from "./../../assets/sounds/wrongAnswer.mp3";
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

            sound: 0,

            answerCorrect: null,

            currentDifficulty: props.currentDifficulty,
            
        };

        this.handleAClick = this.handleAClick.bind(this);
        this.handleBClick = this.handleBClick.bind(this);
        this.handleCClick = this.handleCClick.bind(this);
        this.handleDClick = this.handleDClick.bind(this);
        this.handleSoundFinishedPlaying = this.handleSoundFinishedPlaying.bind(this);

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

    handleSoundFinishedPlaying() {
        this.setState({sound: 1});
    }

    handleFinalAnswer() {
        let { selected, isCorrectA, isCorrectB, isCorrectC, isCorrectD, currentDifficulty } = this.state;
        
        this.setState({sound: 2});

        setTimeout(() => {
            if(selected===1 && isCorrectA===1 ) {
                this.setState({
                    answerCorrect: true,
                    sound: 3,
                })
                this.props.handleDifficulty();
                if(currentDifficulty === 13) {
                    this.props.handlePostGame();
                }
            }
            else if(selected===2 && isCorrectB===1 ) {
                this.setState({
                    answerCorrect: true,
                    sound: 3,
                })
                this.props.handleDifficulty();
                if(currentDifficulty === 13) {
                    this.props.handlePostGame();
                }
            }
            else if(selected===3 && isCorrectC===1 ) {
                this.setState({
                    answerCorrect: true,
                    sound: 3,
                })
                this.props.handleDifficulty();
                if(currentDifficulty === 13) {
                    this.props.handlePostGame();
                }
            }
            else if(selected===4 && isCorrectD===1 ) {
                this.setState({
                    answerCorrect: true,
                    sound: 3,
                })
                this.props.handleDifficulty();
                if(currentDifficulty === 13) {
                    this.props.handlePostGame();
                }
            } else {
                this.setState({
                    answerCorrect: false,
                    sound: 4,
                })
                this.props.handlePostGame();
            }
        }, this.props.isMuted ? 0 : 3500);

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

            sound: this.props.currentDifficulty === 1 ? 0 : 1,

            answerCorrect: null,

            currentDifficulty: this.props.currentDifficulty,
          })
        }
      }

    render() {
        let { answerA, answerB, answerC, answerD, selected, isCorrectA, isCorrectB, isCorrectC, isCorrectD, question, sound, currentDifficulty } = this.state;


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

        let longQuestionsMobile = question.length > 30;

        return (
            <div className="question-bg">
                <Mute/>
                { !this.props.isMuted && sound === 0 ?
                <Sound
                    url={ letsPlay }
                    playStatus={ Sound.status.PLAYING }
                    autoLoad={ true }
                    onFinishedPlaying={ this.handleSoundFinishedPlaying }
                />
                : null }
                { !this.props.isMuted && sound === 1 ?
                <Sound
                    url={ currentDifficulty < 6 ? upTo1000music : upTo32000music }
                    playStatus={ Sound.status.PLAYING }
                    autoLoad={ true }
                    loop={ true }
                />
                : null }
                { !this.props.isMuted && sound === 2 ?
                <Sound
                    url={ finalAnswerSound }
                    playStatus={ Sound.status.PLAYING }
                    autoLoad={ true }
                />
                : null }
                { !this.props.isMuted && sound === 3 ?
                <Sound
                    url={ correctAnswerSound }
                    playStatus={ Sound.status.PLAYING }
                    autoLoad={ true }
                />
                : null }
                { !this.props.isMuted && sound === 4 ?
                <Sound
                    url={ wrongAnswerSound }
                    playStatus={ Sound.status.PLAYING }
                    autoLoad={ true }
                />
                : null }
                <Alert
                    selected={ selected }
                    handleFinalAnswer={ this.handleFinalAnswer }
                    correct={this.state.answerCorrect}  
                    correctAnswer={ correctAnswer }
                />
                <div className="question-answers">
                    <span className="question">
                        <h2 className={ longQuestions ? "long-questions" : (longQuestionsMobile ? "long-questions-mobile" : "") }>{ question }</h2>
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