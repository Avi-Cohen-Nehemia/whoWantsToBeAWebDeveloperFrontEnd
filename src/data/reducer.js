//importing initialState to make it available to the reducer
import initialState from "./initialState";


const reducer = (state, action) => {
    switch (action.type) {
        case "RESET_GAME": return initialState;
        default: return state;
    }
};

export default reducer;