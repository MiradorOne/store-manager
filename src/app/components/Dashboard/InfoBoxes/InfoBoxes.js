import React, { Component } from 'react';

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
                <Employees/>
                <Products/>
                <TotalOrders/>
                <TotalCustomers/>
            </div>
        )
    }
}