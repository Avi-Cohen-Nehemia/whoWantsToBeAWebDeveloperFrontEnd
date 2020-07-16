import { connect } from "react-redux";
import Mute from "./Mute";

import { setSound } from "./../../data/actions/state";

const mapStateToProps = (state) => {
    return {
        isMuted: state.isMuted,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSound:() => dispatch(setSound()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mute);