import { connect } from "react-redux";
import Landing from "./Landing";

import { setGame } from "./../../data/actions/api";

const mapDispatchToProps = (dispatch) => {
    return {
        handleStart: (name) => dispatch(setGame(name)),
    }
}

export default connect(null, mapDispatchToProps)(Landing);