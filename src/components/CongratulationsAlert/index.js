import { connect } from "react-redux";
import CongratulationsAlert from "./CongratulationsAlert";

const mapStateToProps = (state) => {
    return {
        playerName: state.playerName,
        statistics: state.statistics,
        isMuted: state.isMuted,
    };
};

export default connect(mapStateToProps, null)(CongratulationsAlert);