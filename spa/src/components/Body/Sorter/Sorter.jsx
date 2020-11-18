import React from "react";
import Item from "./Item/Item";
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Sorter = (props) => {
    let activeFilter = props.filters.find(f => f.isChecked === true);
    let visibleItems = props.items.filter(i => i.filterLabel.indexOf(activeFilter.label) !== -1)
    return (
        <TransitionGroup>
            {visibleItems.map(i =>
                <CSSTransition key={i.id} timeout={500} classNames="item">
                    <Item
                        id={i.id}
                        task={i.task}
                        filterLabel={i.filterLabel[1]}
                        toggleMarkDone={props.toggleMarkDone}
                        deleteItem={props.deleteItem}
                        updateText={props.updateText}
                        saveUpdatedText={props.saveUpdatedText}
                    />
                </CSSTransition>
            )
            }
        </TransitionGroup>
    )
}

export default Sorter;