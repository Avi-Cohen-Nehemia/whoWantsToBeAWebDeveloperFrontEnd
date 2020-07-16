import { connect } from "react-redux";
import Landing from "./Landing";

import { setGame } from "./../../data/actions/api";

const mapStateToProps = (state) => {
    return {
        isMuted: state.isMuted,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleStart: (name) => dispatch(setGame(name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);