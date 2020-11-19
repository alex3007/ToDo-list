import React from 'react';
import s from './Header.module.scss';
import preloader from "../../assets/preloaders/three-dots.svg";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const Header = (props) => {
    return (
        <div className={s.header}>
            <TransitionGroup>
                {props.isFetching ?
                    <CSSTransition timeout={1000} classNames="item">
                        <img src={preloader}/>
                    </CSSTransition> : null}
            </TransitionGroup>
            {props.isError?<p>Something<br/>is wrong...</p>:null}
            <h1>ToDo list</h1>
        </div>
    )
}
export default Header;

