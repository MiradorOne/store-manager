import axios from 'axios';

//Constants
import * as types from './actionTypes';

export function fetchEmployeesData() {
    return function (dispatch) {
        axios.get('/api?q=*&table=employees')
            .then((response) => {
                dispatch({type: types.FETCH_EMPLOYEES_DATA, payload: response.data})
            })
            .catch((err) => {
                dispatch({type: 'FETCH_REJECTED', payload: err});
            })
    }
}