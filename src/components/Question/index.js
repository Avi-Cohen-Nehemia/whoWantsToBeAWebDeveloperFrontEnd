import { connect } from "react-redux";
import Question from "./Question";

import getQuestion from "./../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        playerName: state.playerName,
        currentQuestion: state.currentQuestion,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoad: () => dispatch(getQuestion()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question);