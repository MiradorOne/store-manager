import * as types from '../actions/actionTypes';

export default function products (state = {}, action) {
    switch (action.type) {
        case types.FETCH_PRODUCTS_DATA: {
            const newState = {};
            action.payload.map((value)=> newState[value.productCode] = value);
            return {
                ...newState
            }
        }
        default: return state;
    }
}