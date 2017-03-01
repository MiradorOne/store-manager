import React, { Component } from 'react';
import { connect } from 'react-redux';

import CustomersList from '../components/Dashboard/Lists/CustomersList';
import CustomerDetails from '../components/Dashboard/Lists/CustomerDetails';
import CustomerPayments from '../components/Dashboard/Lists/CustomerPayments';

import { fetchCustomersData } from '../actions/customerActions';
import { fetchPaymentsData } from '../actions/paymentsActions';


export class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            activeCustomerNum: 0,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(fetchCustomersData());
        this.props.dispatch(fetchPaymentsData());
    }

    handleClick(customerNumber) {
        this.setState({
           activeCustomerNum: customerNumber
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
                <CustomerDetails data={this.props.customersList.filter(value => {
                    if (value.customerNumber === this.state.activeCustomerNum) {
                        return value;
                    }
                })}/>
                <CustomerPayments data={this.props.payments.filter(value => {
                    if (value.customerNumber === this.state.activeCustomerNum) {
                        return value;
                    }
                })}/>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        customersList: Object.keys(state.customers).map((key) => state.customers[key] ),
        payments: Object.keys(state.payments).map((key) => state.payments[key] )
    }
};

export default connect(mapStateToProps)(Dashboard);
