export const getQuestion = () => {
    return (dispatch, getState) => {
        const diffculty = getState().currentDifficulty;

        axios.get(`games/${diffculty}`)
        .then(({ data }) => {
            dispatch(updateCurrentQuestion(data.data));
        });
    };
}