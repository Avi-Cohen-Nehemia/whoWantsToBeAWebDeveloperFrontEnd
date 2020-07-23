import axios from "./../../axios";
import { updateCurrentQuestion } from "./state";
import { setStatistics } from "./state";
import { startGame } from "./state";

export const getQuestion = () => {
    return (dispatch, getState) => {
        const difficulty = getState().currentDifficulty + 1;

        axios.get(`questions/${difficulty}`)
        .then(({ data }) => {
            dispatch(updateCurrentQuestion(data.data));
        });
    };
}

export const setGame = (name) => {
    return (dispatch, getState) => {
        const difficulty = getState().currentDifficulty;

        axios.get(`questions/${difficulty}`)
        .then(({ data }) => {
            dispatch(startGame(data.data, name));
        });
    };
}

export const postGame = () => {
    return (dispatch, getState) => {
        let { currentDifficulty } = getState();

        axios.post('games/statistics', {score: currentDifficulty})
        .then(() => {
            axios.get('games/statistics')
            .then(({ data }) => {
                dispatch(setStatistics(data));
            });
        });
    }
}
