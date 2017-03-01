import * as types from '../actions/actionTypes';

export default function orders (state = {}, action) {
    switch (action.type) {
        case types.FETCH_ORDERS: {
            const newState = {};
            //TODO: Normalize action.payload. Add an array of details ids to orders
            return {
                ...newState
            }
        }
        default: return state;
    }
}