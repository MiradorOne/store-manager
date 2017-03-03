import * as types from '../actions/actionTypes';

export default function orders (state = {}, action) {
    switch (action.type) {
        case types.FETCH_ORDERS: {
            return {
                ...action.payload
            };
        }
        default: return state;
    }
}