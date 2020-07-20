import { connect } from "react-redux";
import HostQuestion from "./HostQuestion";

const mapStateToProps = (state) => {
    return {
        currentDifficulty: state.currentDifficulty,
        currentAmount: state.currentQuestion.amount,
    };
};

export default connect(mapStateToProps, null)(HostQuestion);