import * as types from '../actions/actionTypes';

export default function offices (state= {}, action) {
    switch (action.type) {
        case types.FETCH_OFFICES_DATA: {
            const newState = {};
            action.payload.map((value)=> newState[value.officeCode] = value);
            return {
                ...newState
            }
        }
        default: return state;
    }
}