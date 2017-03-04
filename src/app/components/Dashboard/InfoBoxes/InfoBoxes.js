import React, { Component } from 'react';

import Loading from '../../common/Loading/Loading';
import '../../../../styles/components/InfoBoxes.css';


// Child components
import Employees from './Boxes/Employees';
import Products from './Boxes/Products';
import TotalCustomers from './Boxes/TotalCustomers';
import TotalOrders from './Boxes/TotalOrders';

// Component distributes data to 'dump' components
export default class InfoBoxes extends Component {
    render() {
        return (
            <div className="info-boxes">
                <Employees data={this.props.employeersLength || <Loading/>}/>
                <Products data={this.props.productsLength || <Loading/>}/>
                <TotalOrders data={this.props.ordersLength || <Loading/>}/>
                <TotalCustomers data={this.props.customersLength || <Loading/>}/>
            </div>
        )
    }
}