import { connect } from "react-redux";
import FinalAnswerAlert from "./FinalAnswerAlert";

const mapStateToProps = (state) => {
    return {
        playerName: state.playerName,
    };
};

export default connect(mapStateToProps, null)(FinalAnswerAlert);