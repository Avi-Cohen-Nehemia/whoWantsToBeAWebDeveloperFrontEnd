import { connect } from "react-redux";
import Landing from "./Landing";

import { getQuestion } from "./../../data/actions/api";

const mapDispatchToProps = (dispatch) => {
    return {
        handleStart: () => dispatch(getQuestion()),
    }
}

export default connect(null, mapDispatchToProps)(Landing);