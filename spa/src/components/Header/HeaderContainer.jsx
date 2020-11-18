import React from "react";
import Header from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";

const HeaderContainer =(props) => {
        return (
                <Header isFetching={props.isFetching}/>
        )
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.body.isFetching,
    }
};

export default compose(connect(mapStateToProps))(HeaderContainer);
