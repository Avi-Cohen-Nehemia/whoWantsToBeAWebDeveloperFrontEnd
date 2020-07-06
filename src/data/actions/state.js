export const updateCurrentQuestion = (data) => {
    return {
        type: "UPDATE_QUESTION",
        currentQuestion: {
            content: data[0].content,
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

export const updateDifficulty = () => {
    return {
        type: "UPDATE_DIFFICULTY",
    }
}

export const resetGame = () => {
    return {
        type: "RESET_GAME",
    }
}