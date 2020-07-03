export const updateCurrentQuestion = (data) => {
    return {
        type: "UPDATE_QUESTION",
        currentQuestion: {
            content: data.content,
            answerA: {
                answer: data.answers[0].answer,
                correct: data.answers[0].correct
            },
    
            answerB: {
                answer: data.answers[1].answer,
                correct: data.answers[1].correct
            },
    
            answerC: {
                answer: data.answers[2].answer,
                correct: data.answers[2].correct
            },
    
            answerD: {
                answer: data.answers[3].answer,
                correct: data.answers[3].correct
            }
        }
    };
};