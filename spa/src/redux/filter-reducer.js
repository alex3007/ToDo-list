let initialState = {
    filterLabels: [
        {
            label: "all",
            isChecked: true
        },
        {
            label: "todo",
            isChecked: false
        },
        {
            label: "done",
            isChecked: false
        }
    ]
}

const filterReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'USE_FILTER':
            return {
                ...state, filterLabels: state.filterLabels.map(f => {
                    if (f.label === action.label) {
                        return {
                            ...f, isChecked: true
                        }
                    } else {
                        return {
                            ...f, isChecked: false
                        }
                    }
                })
            }
        default:
            return state
    }
};

export const useFilter = (label) => ({type: 'USE_FILTER', label});

export default filterReducer;