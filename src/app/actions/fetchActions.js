import axios from 'axios';

//Constants
import * as types from './actionTypes';

export function fetchMainData() { //Data for Main Dashboard
    return function (dispatch) {
        axios.all([
            axios.get('/api/orders'),
            axios.get('/api?q=*&table=orderdetails'),
            axios.get('/api?q=*&table=employees'),
            axios.get('/api?q=*&table=customers'),
            axios.get('/api?q=*&table=products'),
        ])
            .then(axios.spread((orders, details, employees, customers, products) => {

                //Add to orders an array of ids from orderDetails
                const newState = {};
                const normalizeOrders = {};

                orders.data.forEach(order => {
                    normalizeOrders[order.orderNumber] = order;
                    order.detailsIds = [];
                });
                orders.data.forEach(order => {
                    normalizeOrders[order.orderNumber].detailsIds.push(order.detailsId);
                    delete order.detailsId;
                });

                orders.data.forEach(order => newState[order.orderNumber] = order);

                dispatch({type: types.FETCH_ORDERS, payload: { ...newState, ...normalizeOrders}});
                dispatch({type: types.FETCH_ORDER_DETAILS, payload: details.data});
                dispatch({type: types.FETCH_EMPLOYEES_DATA, payload: employees.data});
                dispatch({type: types.FETCH_CUSTOMERS_DATA, payload: customers.data});
                dispatch({type: types.FETCH_PRODUCTS_DATA, payload: products.data});
            }))
            .catch((err) => {
                dispatch({type: 'FETCH_REJECTED', payload: err});
            })
    }
}