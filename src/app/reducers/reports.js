import * as types from '../actions/actionTypes';

export default function reports(state= {}, action) {
    switch (action.type) {
        case types.FETCH_DAILY_REPORTS: { // In progress
            console.log(action.payload);
            return {
                ...action.payload,
            }
        }
        case types.FETCH_REPORT_BY_DATE: {
            return {
                ...action.payload
            }
        }
        default: return state;
    }
}