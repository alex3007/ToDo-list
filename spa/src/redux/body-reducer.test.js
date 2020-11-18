import bodyReducer,{initialState, setItems, onAddItem, onDeleteItem, updateText} from "./body-reducer";
import {api} from "../api/api";
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'


describe('Test of action creators', () => {

    let state = {
        items:[
            {id: 1, task: "ToDo something", filterLabel:["all","todo"]},
            {id: 2, task: "ToDo...", filterLabel:["all","todo"]}
        ]};

    test('the length of items-array is expected to correct', () => {
        let action = setItems([{id: 3, task: "ToDo...", filterLabel: ["all", "todo"]}]);
        let newState = bodyReducer(state, action);
        expect(newState.items.length).toBe(1);
    });

    test('the length of items-array is expected to increase', () => {
        let action = onAddItem({id: 3, task: "ToDo...", filterLabel: ["all", "todo"]});
        let newState = bodyReducer(state, action);
        expect(newState.items.length).toBe(3);
    });

    test('the length of the items-array is expected to decrease', () => {
        let action = onDeleteItem( 2);
        let newState = bodyReducer(state, action);
        expect(newState.items.length).toBe(1);
    });

    test('the task of the item is expected to change value', () => {
        let action = updateText( 2,"newToDo");
        let newState = bodyReducer(state, action);
        expect(newState.items[1].task).toBe("newToDo");
    });
})



describe('Test of thunk action creators', () => {

    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    const store = mockStore(initialState)

    let item = {id: 3, task: "ToDo...", filterLabel: ["all", "todo"]};


    test('should dispatch action', () => {

        // Dispatch the action
        store.dispatch(onAddItem(item))

        const actions = store.getActions()
        const expectedPayload = {type: 'ADD_ITEM', item}
        expect(actions).toEqual([expectedPayload])
    })


    test('should execute fetch data', () => {

        const expectedPayload = {type: 'ADD_ITEM', item}

        const addItem = () => async (dispatch) => {
            return api.addItem().then(
                dispatch(expectedPayload)
            )
        };

        // Dispatch the action
        return store.dispatch(addItem())
            .then(() => {
                const actions = store.getActions()
                expect(actions[0]).toEqual(expectedPayload)
            })
    })

})


