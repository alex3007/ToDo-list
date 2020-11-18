import React from "react";
import Sorter from "./Sorter/Sorter";
import Filter from "./Filter/Filter";
import Creator from "./Creator/Creator";

const Body = (props) => {
    return (
        <div>
            <Creator
                addItem={props.addItem}
            />
            <Filter
                filters={props.filters}
                useFilter={props.useFilter}
            />
            <Sorter
                filters={props.filters}
                items={props.items}
                toggleMarkDone={props.toggleMarkDone}
                deleteItem={props.deleteItem}
                updateText={props.updateText}
                saveUpdatedText={props.saveUpdatedText}

            />
        </div>
    )
}

export default Body;
