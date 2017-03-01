import axios from 'axios';

//Constants
import * as types from './actionTypes';

export function fetchCustomersData() {
    return function (dispatch) {
            axios.get('/api?q=*&table=customers')
            .then((response) => {
                dispatch({type: types.FETCH_CUSTOMERS_DATA, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_REJECTED', payload: err});
            })
    }
}

