//importing initialState to make it available to the reducer
import initialState from "./initialState";

const updateQuestion = (state, action) => {
    return {
        ...state,
        currentQuestion: action.currentQuestion,
    }
} 

const updateDifficultyReducer = (state) => {
    return {
        ...state,
        currentDifficulty: state.currentDifficulty + 1,
    }
}

const playerName = (state, action) => {
    return {
        ...state,
        playerName: action.playerName,
        currentQuestion: action.currentQuestion,
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "START_GAME" : return playerName(state, action);
        case "UPDATE_QUESTION": return updateQuestion(state, action);
        case "UPDATE_DIFFICULTY": return updateDifficultyReducer(state);
        case "RESET_GAME": return initialState;
        default: return state;
    }
};

export default reducer;