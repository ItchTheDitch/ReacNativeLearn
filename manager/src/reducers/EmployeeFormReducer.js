import {
    EMPLOYEE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    
    console.log(action.payload);
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload === {prop: 'name', value: 'jane'}
            //[action.payload.prop] not an array is key interpolation,
            //if we call our action Creator with a prop of name the [action.payload.prop] will turn
            // in to name: 
            return { ...state, [action.payload.prop]: action.payload.value };

        default:
            return state;
    }
};

