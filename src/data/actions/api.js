import axios from "./../../axios";

export const getQuestion = () => {
    return (dispatch, getState) => {
        const diffculty = getState().currentDifficulty;

        axios.get(`questions/${diffculty}`)
        .then(({ data }) => {
            dispatch(updateCurrentQuestion(data.data));
        });
    };
}