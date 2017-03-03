import React, { Component } from 'react';
import { connect } from 'react-redux';

import InfoBoxes from '../components/Dashboard/InfoBoxes/InfoBoxes';
import LastOrdersTable from '../components/Dashboard/Tables/LastOrdersTable';

import { fetchMainData } from '../actions/fetchActions';

export class Dashboard extends Component {

    componentWillMount() {
        this.props.dispatch(fetchMainData());
    }

    render() {
        return (
            <main className="dashboard">
                <h2>Dashboard</h2>
                <InfoBoxes customersLength={this.props.customersLength}
                           employeersLength={this.props.employeesLength}
                           ordersLength={this.props.orders.length} productsLength={this.props.productsLength}/>
                <LastOrdersTable dataPerPage="5"
                                 orders={this.props.orders} details={this.props.orderDetails}/>
            </main>
        )
    }
}

function mapStateToProps(store) {
    return {
        orders: Object.keys(store.orders).map(key => store.orders[key]),
        orderDetails: store.orderDetails,
        customersLength: Object.keys(store.customers).length,
        employeesLength: Object.keys(store.employees).length,
        productsLength: Object.keys(store.products).length,
    }
}

export default connect(mapStateToProps)(Dashboard);