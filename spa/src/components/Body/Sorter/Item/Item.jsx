import React from 'react';
import s from './Item.module.scss';
import {FaRegCircle, FaRegCheckCircle, FaRegTrashAlt, FaPen, FaPaperPlane} from "react-icons/fa";

export default class Item extends React.Component {

    constructor(props) {
        super(props);
        this.itemWrapper = React.createRef();
        this.state = {
            isEnabled: false
        }
    }

    onToggleMarkDone = () => {
        this.props.toggleMarkDone(this.props.id, this.props.filterLabel);
    }

    onDeleteItem = () => {
        this.props.deleteItem(this.props.id)
    }

    onStartTexUpdating = (text) => {
        this.setState({...this.state, isEnabled: true})
    }

    onTextUpdating = (text) => {
        this.props.updateText(this.props.id, text.target.value)
    }

    onFinishTexUpdating = () => {
        this.props.saveUpdatedText(this.props.id, this.props.task)
        this.setState({...this.state, isEnabled: false})
    }

    render() {
        return (
            <form>
                {this.props.filterLabel === "todo"?
                    <FaRegCircle onClick={this.onToggleMarkDone} className={s.markingIcon}/>:
                    <FaRegCheckCircle onClick={this.onToggleMarkDone} className={s.markingIcon}/>}

                <textarea onChange={this.onTextUpdating}
                          value={this.props.task}
                          disabled={!this.state.isEnabled}
                          className={`${this.props.filterLabel === "done"?
                              s.bgWhite: s.bgTransparent}`}
                          ref={this.itemWrapper}
                          placeholder='Todo'
                />
                {!this.state.isEnabled?
                    <FaPen onClick={this.onStartTexUpdating} className={s.editIcon}/>:
                    <FaPaperPlane onClick={this.onFinishTexUpdating} className={s.editIcon}/>}
                <FaRegTrashAlt onClick={this.onDeleteItem} className={s.dropIcon}/>
            </form>
        );
    }
}
