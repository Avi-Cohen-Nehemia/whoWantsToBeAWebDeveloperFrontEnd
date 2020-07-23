import { connect } from "react-redux";
import Question from "./Question";

import { getQuestion, postGame } from "./../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        playerName: state.playerName,
        currentQuestion: state.currentQuestion,
        currentDifficulty: state.currentDifficulty,
        isMuted: state.isMuted,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoad: () => dispatch(getQuestion()),
        handlePostGame: () => dispatch(postGame()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);