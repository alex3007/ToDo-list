import React from "react";
import Body from "./Body";
import {compose} from "redux";
import {connect} from "react-redux";
import {getItems, addItem, deleteItem, toggleMarkDone, updateText, saveUpdatedText
} from "../../redux/body-reducer";
import {useFilter} from "../../redux/filter-reducer";


class BodyContainer extends React.Component {

    componentDidMount() {
        this.props.getItems()
    }
    render() {
        return (
                <Body
                    items={this.props.items}
                    isFetching={this.props.isFetching}
                    filters={this.props.filters}
                    addItem={this.props.addItem}
                    toggleMarkDone={this.props.toggleMarkDone}
                    deleteItem={this.props.deleteItem}
                    updateText={this.props.updateText}
                    saveUpdatedText={this.props.saveUpdatedText}
                    useFilter={this.props.useFilter}
                />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        items: state.body.items,
        isFetching: state.body.isFetching,
        filters: state.filters.filterLabels
    }
};

export default compose(connect(mapStateToProps,{
    getItems, addItem, deleteItem, toggleMarkDone, updateText, saveUpdatedText, useFilter
    }))(BodyContainer);
