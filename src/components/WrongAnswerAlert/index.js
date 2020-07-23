import { connect } from "react-redux";
import WrongAnswerAlert from "./WrongAnswerAlert";

const mapStateToProps = (state) => {
    return {
        playerName: state.playerName,
        statistics: state.statistics,
        currentDifficulty: state.currentDifficulty,
    };
};

export default connect(mapStateToProps, null)(WrongAnswerAlert);