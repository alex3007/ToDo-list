import React, {useState} from "react";
import s from "./Creator.module.scss";
import {FaPlus} from "react-icons/fa";

const Creator = (props) => {
    let taskArea = React.createRef();
    const [task, setTask] = useState("");
    const addItem = (evt) => {
        evt.preventDefault();
        task !== "" && props.addItem(task);
        setTask("")
    }
    return (
        <form onSubmit={addItem}>
            <input placeholder="Enter todo..."
                   onChange={() => {
                       setTask(taskArea.current.value)
                   }}
                   ref={taskArea}
                   value={task}
            />
            <FaPlus className={s.addIcon}
                    onClick={addItem}/>
        </form>
    )
};
export default Creator;

