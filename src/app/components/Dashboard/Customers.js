import React, { Component } from 'react';

import CustomersList from './Lists/CustomersList';
import CustomerDetails from './Lists/CustomerDetails';
import CustomerPayments from './Lists/CustomerPayments';


import load from '../../request';


export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            customersList: [],
            customerDetails: [],
            customerPayments: [],
            activeCustomerNum: 0,
        };
        this.getCustomers = this.getCustomers.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getCustomers();
    }

    getCustomers() {
        load('/api/?q=customerName,customerNumber&table=customers').then(data => {
            this.setState({
                customersList: JSON.parse(data),
            });
        });
    }

    handleClick(customerNumber) {
        //Load common details
        load(`/api/?q=*&table=customers&where=customerNumber = ${customerNumber} `).then(details => {
            this.setState({
                customersList: this.state.customersList,
                customerDetails: JSON.parse(details),
                customerPayments: this.state.customerPayments,
                activeCustomerNum: customerNumber,
            })
        });
        //Load payment details
        load(`/api/?q=*&table=payments&where=customerNumber = ${customerNumber} `).then(details => {
            this.setState({
                customersList: this.state.customersList,
                customerDetails: this.state.customerDetails,
                customerPayments: JSON.parse(details),
                activeCustomerNum: customerNumber
            })
        });
    }

    render() {
        return (
            <main className="dashboard">
                <h2>Customers</h2>
                <CustomersList data={this.state.customersList}
                               handleClick={this.handleClick}
                               dataPerPage={10}
                               activeCustomerNumber={this.state.activeCustomerNum}/>
                <CustomerDetails data={this.state.customerDetails}/>
                <CustomerPayments data={this.state.customerPayments}/>
            </main>
        )
    }
}