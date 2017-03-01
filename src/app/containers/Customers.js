import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomersList from '../components/Dashboard/Lists/CustomersList';
import CustomerDetails from '../components/Dashboard/Lists/CustomerDetails';
import CustomerPayments from '../components/Dashboard/Lists/CustomerPayments';

import { fetchCustomersData } from '../actions/customerActions';
import { fetchPaymentsData } from '../actions/paymentsActions';

import request from '../utils/request';


export class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            customerDetails: [],
            customerPayments: [],
            activeCustomerNum: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(fetchCustomersData());
        this.props.dispatch(fetchPaymentsData());
    }

    handleClick(customerNumber) {
        //Load common details
        request(`/api/?q=*&table=customers&where=customerNumber = ${customerNumber} `).then(details => {
            this.setState({
                customersList: this.state.customersList,
                customerDetails: JSON.parse(details),
                customerPayments: this.state.customerPayments,
                activeCustomerNum: customerNumber,
            })
        });
        //Load payment details
        request(`/api/?q=*&table=payments&where=customerNumber = ${customerNumber} `).then(details => {
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
                <CustomersList data={this.props.customersList}
                               handleClick={this.handleClick}
                               dataPerPage={10}
                               activeCustomerNumber={this.state.activeCustomerNum}/>
                <CustomerDetails data={this.state.customerDetails}/>
                <CustomerPayments data={this.state.customerPayments}/>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customersList: Object.keys(state.customers).map((key) => state.customers[key] )
    }
};

export default connect(mapStateToProps)(Dashboard);
