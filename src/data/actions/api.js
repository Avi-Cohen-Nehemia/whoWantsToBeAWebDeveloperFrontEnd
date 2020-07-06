import axios from "./../../axios";
import { updateCurrentQuestion } from "./state";

export const getQuestion = () => {
    return (dispatch, getState) => {
        const difficulty = getState().currentDifficulty;

        axios.get(`questions/${difficulty}`)
        .then(({ data }) => {
            dispatch(updateCurrentQuestion(data.data));

        });
    };
}