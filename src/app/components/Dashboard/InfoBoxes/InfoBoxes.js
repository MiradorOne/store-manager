import React, { Component } from 'react';

// Child components
import Employees from './Boxes/Employees';
import Products from './Boxes/Products';
import TotalCustomers from './Boxes/TotalCustomers';
import TotalOrders from './Boxes/TotalOrders';

//Request util
import load from '../../../request';

// Component distributes data to 'dump' components
export default class InfoBoxes extends Component {
    constructor() {
        super();
        this.state = {
            boxesData: {},
        };
        this.getData = this.getData.bind(this);
        this.getData();
    }

    getData() {
        const newState = {};
        Promise.all([
            load('/api?q=*&count=true&table=employees').then(data => {
                newState.employees = JSON.parse(data)[0].quantity
            }),
            load('api?q=*&count=true&table=products').then(data => {
                newState.products = JSON.parse(data)[0].quantity
            }),
            load('/api?q=*&count=true&table=orders').then(data => {
                newState.orders = JSON.parse(data)[0].quantity
            }),
            load('/api?q=*&count=true&table=customers').then(data => {
                newState.customers = JSON.parse(data)[0].quantity
            })
        ]).then(() => {
            this.setState({
                boxesData: newState
            })
        })
    };

    render() {
        return (
            <div className="info-boxes">
                <Employees data={this.state.boxesData.employees || 0}/>
                <Products data={this.state.boxesData.products || 0}/>
                <TotalOrders data={this.state.boxesData.orders || 0}/>
                <TotalCustomers data={this.state.boxesData.customers || 0}/>
            </div>
        )
    }
}