import { applyMiddleware, createStore, compose } from 'redux';
// import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from '../reducers/';

// Approximate structure of store
const state = {
    customers: {
        [101]: {
            customerNumber: 101, //Is a primary key
            customerName: 'Ivan Company',
            contactLastName: 'Ivanenko',
            contactFirstName: 'Ivan',
            phone: 123456789,
            addressLine1: 'Street',
            addressLine2: 'Street',
            city: 'city',
            state: null,
            postalCode: 35856,
            country: 'France',
            creditLimit: 21000,
        }
    },
    orders: {
        [10298]: {
            orderNumber: 10298, //Is a primary key
            orderDate: '27-01-14',
            requiredDate: '27-01-14',
            shippedDate: '27-01-14',
            status: 'Shipped',
            comments: null,
            customerNumberById: 101, //Foreign key
            orderDetailsById: [1,2,3],
        },
    },
    orderDetails: {
        [1]: {
            orderNumber: 1, //Foreign key
            productCode: 'S18-4409', //Foreign key
            quantityOrdered: 5,
            priceEach: 9.14,
            orderLineNumber: 3,
        }
    },
    employees: {
        [1]: {
            employeeNumber: 1, //Is a primary key
            lastName: 'Smith',
            firstName: 'Diane',
            extension: 'x5800',
            email: 'email@gmail.com',
            officeById: 1, //Foreign key
            reportsToEmployeeId: null, //Foreign key
            jobTitle: 'President',
        }
    },
    offices: {
        [1]: {
          city: 'Boston',
          phone: '+1 650 219 4782',
          addressLine1: '100 Market Street',
          addressLine2: 'Suite 300',
          state: 'CA',
          county: 'USA',
          postalCode: 94080,
          territory: 'NA'
      }
    },
    payments: {
        ['HQ336336']: {
            customerNumberById: 101, //Foreign key
            checkNumber: 'HQ336336', //Is a primary key
            paymentDate: '2004-11-12',
            amount: 42789.14,
        }
    },
    products: {
        ['S24_2011']: {
            productCode: 'S24_2011',
            productName: '18th century schooner',
            productLine: 'Classic Cars', //Foreign key
            productScale: '1:24',
            productVendor: 'Carousel DieCast Legends',
            productDesc: 'Lorem ipsum',
            quantityInStock: 18,
            buyPrice: 82.34,
            msrp: 122.89, // Manufacturer's Suggested Retail Price
        }
    },
    productLines: {
        ['Classic Cars']: {
            productLine: 'Classic Cars', //Is a primary key
            textDesc: 'Lorem Ipsum',
            htmlDesc: null,
            image: null,
        }
    },
};

const middleware = applyMiddleware(thunk, logger());

export default createStore(
    reducer,
    compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
