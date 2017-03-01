import * as types from '../actions/actionTypes';

export default function orders (state = {}, action) {
    switch (action.type) {
        case types.FETCH_ORDER_DETAILS: {
            const newState = {};
            action.payload.map((value)=> newState[value.ID] = value);
            return {
                ...newState
            }
        }
        default: return state;
    }
}