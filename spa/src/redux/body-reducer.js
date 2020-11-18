import {updateObjectInArray} from "../utils/objectUpdater";
import {api} from "../api/api";
import {v4 as uuidv4} from 'uuid';

let initialState = {
    items: [],
    isFetching: true
};

const bodyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return {...state, items: action.items};
        case 'TOGGLE_IS_FETCHING': {
            return {...state, isFetching: action.isFetching}
        }
        case 'ADD_ITEM': {
            return {...state, items: [action.item, ...state.items]}
        }
        case 'DELETE_ITEM': {
            return {
                ...state,
                items: state.items.filter(p => p.id !== action.id)
            }
        }
        case 'TOGGLE_MARK_DONE': {
            return {
                ...state,
                items: updateObjectInArray(state.items, action.id,
                    {filterLabel: ["all", action.filterLabel]})
            }
        }
        case 'TEXT_UPDATE': {
            return {
                ...state,
                items: updateObjectInArray(state.items, action.id,
                    {task: action.text})
            }
        }
        default:
            return state
    }
};

export const setItems = (items) => ({type: 'SET_ITEMS', items});
export const toggleIsFetching = (isFetching) => ({type: 'TOGGLE_IS_FETCHING', isFetching});
export const onAddItem = (item) => ({type: 'ADD_ITEM', item});
export const onDeleteItem = (id) => ({type: 'DELETE_ITEM', id});
export const onToggleMarkDone = (id, filterLabel) => ({type: 'TOGGLE_MARK_DONE', id, filterLabel});
export const updateText = (id, text) => ({type: 'TEXT_UPDATE', id, text});

export const getItems = () => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const res = await api.getItems();
    dispatch(setItems(res.data));
    dispatch(toggleIsFetching(false));
};
export const addItem = (text) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    let id = uuidv4();
    const res = await api.addItem(id, text);
    if (res.data.result) {
        dispatch(onAddItem(res.data.item));
        dispatch(toggleIsFetching(false));
    }
};
export const deleteItem = (id) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const res = await api.deleteItem(id);
    if (res.data.result) {
        dispatch(onDeleteItem(res.data.id));
        dispatch(toggleIsFetching(false));
    }
};
export const saveUpdatedText = (id, text) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const res = await api.saveUpdatedText(id, text);
    if (res.data.result) {
        dispatch(updateText(res.data.id, res.data.text));
        dispatch(toggleIsFetching(false));
    }
};
export const toggleMarkDone = (id, filterLabel) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const res = await api.toggleMarkDone(id, filterLabel);
    if (res.data.result) {
        dispatch(onToggleMarkDone(res.data.id, res.data.filterLabel));
        dispatch(toggleIsFetching(false));
    }
};
export default bodyReducer;