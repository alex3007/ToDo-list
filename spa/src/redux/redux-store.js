import {applyMiddleware,combineReducers, createStore} from "redux";
import bodyReducer from "./body-reducer";
import filterReducer from "./filter-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({

    body: bodyReducer,
    filters: filterReducer

});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;