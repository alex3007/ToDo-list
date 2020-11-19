import React from "react";
import Header from "./Header";
import {compose} from "redux";
import {connect} from "react-redux";

const HeaderContainer =(props) => {
        return (
                <Header
                    isFetching={props.isFetching}
                    isError={props.isError}/>
        )
}

let mapStateToProps = (state) => {
    return {
        isFetching: state.body.isFetching,
        isError: state.body.isError
    }
};

export default compose(connect(mapStateToProps))(HeaderContainer);
