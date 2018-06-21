import * as actions from "../actions/component1";

const defaultState = {
    array1: [],
    array2: [],
    name: ''
};

export const component1 = (state = defaultState, action) => {
    switch(action.type) {
        case actions.ACTION_1:
            // Important: never edit the existing state, always return a new object
            return {
                ...state,
                array1: [1,2,3],
                name: action.arg1 // Action 1 provides an argument 'arg1'
            };
        case actions.ACTION_2:

            // adding something to an array:
            let array1 =  state.array1.concat(5);
            let array2 = [...state.array1, 5]; // both valid

            const index = 1;
            // removing an item from an array:
            array1 = state.array1
                    .slice(0, index)
                    .concat(state.array1.slice(index + 1));
            array2 = [...state.array1.slice(0, index),
                         ...state.array1.slice(index + 1)]; // both valid

            // changing an item in an array
            array1 = state.array1
                    .slice(0, index)
                    .concat(state.array1[index] + 1)
                    .concat(state.array1.slice(index + 1));
            array2 = [...state.array1.slice(0, index),
                        state.array1[index] + 1,
                         ...state.array1.slice(index + 1)]; // both valid
            
            return {
                ...state,
                array1,
                array2
            }
        default:
            return state;
    }
};