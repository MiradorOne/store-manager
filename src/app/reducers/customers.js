import * as types from '../actions/actionTypes';

export default function customers (state = {}, action) {
    switch (action.type) {
        case types.FETCH_CUSTOMERS_DATA: {
            const newState = {};
            action.payload.map((value)=> newState[value.customerNumber] = value);
            return {
                ...newState
            }
        }
        default: return state;
    }
}