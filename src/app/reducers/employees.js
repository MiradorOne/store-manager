import * as types from '../actions/actionTypes';

export default function employees (state = {}, action) {
    switch (action.type) {
        case types.FETCH_EMPLOYEES_DATA: {
            const newState = {};
            action.payload.map((value)=> newState[value.employeeNumber] = value);
            return {
                ...newState
            }
        }
        default: return state;
    }
}