import { connect } from "react-redux";
import Alert from "./Alert";

import { getQuestion } from "./../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        playerName: state.playerName,
        currentDifficulty: state.currentDifficulty,
        currentAmount: state.currentQuestion.amount,
        statistics: state.statistics,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: () => dispatch(getQuestion()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alert);