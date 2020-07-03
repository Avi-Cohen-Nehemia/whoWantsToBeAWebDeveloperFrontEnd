export const initialState = {
    playerName: "",
    currentQuestion: {
        content: "",
        answerA: {
            answer: "",
            correct: null
        },

        answerB: {
            answer: "",
            correct: null
        },

        answerC: {
            answer: "",
            correct: null
        },
        
        answerD: {
            answer: "",
            correct: null
        }
    }
};

export default initialState;