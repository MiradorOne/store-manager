import { combineReducers } from 'redux';

import customers from './customers.js';
import orders from './orders.js';
import employees from './employees.js';
import orderDetails from './orderDetails.js';
import payments from './payments.js';
import products from './products.js';
import productLines from './productLines.js';
import offices from './offices.js';
import reports from './reports.js';

export default combineReducers({
    customers,
    orders,
    orderDetails,
    employees,
    offices,
    payments,
    products,
    productLines,
    reports
});