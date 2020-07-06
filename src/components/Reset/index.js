import { connect } from "react-redux";
import Reset from "./Reset";

import { resetGame } from "../../data/actions/state";

const mapDispatchToProps = (dispatch) => {
    return {
        handleReset: () => dispatch(resetGame()),
    };
};

export default connect(null, mapDispatchToProps)(Reset);