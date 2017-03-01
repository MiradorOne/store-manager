import * as types from '../actions/actionTypes';

export default function payments (state = {}, action) {
    switch (action.type) {
        case types.FETCH_PAYMENTS_DATA: {
            const newState = {};
            action.payload.data.map((value)=> newState[value.checkNumber] = value);
            return {
                ...newState
            }
        }
        default: return state;
    }
}