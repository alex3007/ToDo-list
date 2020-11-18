import filterReducer,{useFilter} from "./filter-reducer";


describe('Test of action creator', () => {

    let state = {
        filterLabels: [
            {label: "all", isChecked: true},
            {label: "todo", isChecked: false},
            {label: "done", isChecked: false}
        ]
    }

    test('the key (isChanged) is expected to change value to the opposite()', () => {
        let action = useFilter("todo");
        let newState = filterReducer( state, action);
        expect(newState.filterLabels[1].isChecked).toBe(true);
    });


    test('the key (isChanged) is expected to change value to the opposite', () => {
        let action = useFilter("todo");
        let newState = filterReducer( state, action);
        expect(newState.filterLabels[0].isChecked).toBe(false);
    });
})



