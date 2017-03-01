import axios from 'axios';

//Constants
import * as types from './actionTypes';

// export function fetchOrdersData() {
//     return function (dispatch) {
//         axios.all([
//             axios.get('/api?q=*&table=orders'),
//             axios.get('/api?q=*&table=orderdetails')
//         ])
//             .then(axios.spread((orders, details) => {
//                 dispatch({type: types.FETCH_ORDERS, payload: orders.data});
//                 dispatch({type: types.FETCH_ORDER_DETAILS, payload: details.data});
//             }))
//             .catch((err) => {
//                 dispatch({type: 'FETCH_REJECTED', payload: err});
//             })
//     }
// }