import * as types from './actionTypes';

import axios from 'axios';

export function fetchOfficesData() {
    return dispatch => {
        axios.get('/api?q=*&table=offices')
            .then(response => {
                dispatch({type: types.FETCH_OFFICES_DATA, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_REJECTED', payload: err});
            })
    }
}