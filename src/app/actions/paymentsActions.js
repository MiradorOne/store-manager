import * as types from './actionTypes';

import axios from 'axios';

export function fetchPaymentsData() {
    return (dispatch) => {
        axios.get('/api?q=*&table=payments')
            .then((data) => {
                dispatch({type: types.FETCH_PAYMENTS_DATA, payload: data});
            })
    }
}