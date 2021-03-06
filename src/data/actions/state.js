export const updateCurrentQuestion = (data) => {
    return {
        type: "UPDATE_QUESTION",
        currentQuestion: {
            content: data[0].content,
            amount: data[0].amount,
            answerA: {
                answer: data[0].answers[0].answer,
                correct: data[0].answers[0].correct
            },
    
            answerB: {
                answer: data[0].answers[1].answer,
                correct: data[0].answers[1].correct
            },
    
            answerC: {
                answer: data[0].answers[2].answer,
                correct: data[0].answers[2].correct
            },
    
            answerD: {
                answer: data[0].answers[3].answer,
                correct: data[0].answers[3].correct
            }
        }
    };
};

export const startGame = (data, name) => {
    return {
        type: "START_GAME",
        playerName: name.playerName,
        currentQuestion: {
            content: data[0].content,
            amount: data[0].amount,
            answerA: {
                answer: data[0].answers[0].answer,
                correct: data[0].answers[0].correct
            },
    
            answerB: {
                answer: data[0].answers[1].answer,
                correct: data[0].answers[1].correct
            },
    
            answerC: {
                answer: data[0].answers[2].answer,
                correct: data[0].answers[2].correct
            },
    
            answerD: {
                answer: data[0].answers[3].answer,
                correct: data[0].answers[3].correct
            }
        }
    };
};

export const resetGame = () => {
    return {
        type: "RESET_GAME",
    }
}

export const setSound = () => {
    return {
        type: "SET_SOUND",
    }
}

export const setStatistics = (data) => {
    return {
        type: "SET_STATISTICS",
        data: data,
    }
}