import React from "react";
import s from "./Filter.module.scss";
import {FaToggleOff, FaToggleOn} from "react-icons/fa";

const Filter = (props) => {

    return (
        <div className={s.filterContainer}>
            {props.filters.map(f => (
                <label
                    key={`${f.label}_key`}
                    htmlFor={f.label}
                    id={f.label}
                    onClick={() => {
                        props.useFilter(f.label)
                    }}>
                    {f.isChecked ?
                        <FaToggleOn className={s.switcher}/> :
                        <FaToggleOff className={s.switcher}/>}
                    {f.label}
                </label>
            ))}
        </div>
    )
}

export default Filter;