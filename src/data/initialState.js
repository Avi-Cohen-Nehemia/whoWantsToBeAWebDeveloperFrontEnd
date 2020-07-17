export const initialState = {
    playerName: "",
    currentDifficulty: 1,
    isMuted: false,
    statistics: null,
    gameOverLoaded: false,

    currentQuestion: {
        content: "",
        amount: "",
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