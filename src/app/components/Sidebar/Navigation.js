import React, { Component } from 'react';
import { Link } from 'react-router'


export default class Navigation extends Component {


    render() {
        return (
            <div className="navigation">
                <ul className="sidebar-menu">
                    <li className="list-title">Main Navigation</li>
                    <li>
                        <Link to="/" >Main</Link>
                        <span className="pull-right-container"><i className="fa fa-angle-left"></i></span>
                    </li>
                    <li>
                        <Link to="customers">Customers</Link>
                        <span className="pull-right-container"><i className="fa fa-angle-left"></i></span>
                    </li>
                    <li>
                        <Link to="employees">Employees</Link>
                        <span className="pull-right-container"><i className="fa fa-angle-left"></i></span>
                    </li>
                    <li>
                        <Link to="offices">Offices</Link>
                        <span className="pull-right-container"><i className="fa fa-angle-left"></i></span>
                    </li>
                    <li>
                        <Link to="product-lines">Product Lines</Link>
                        <span className="pull-right-container"><i className="fa fa-angle-left"></i></span>
                    </li>
                    <li>
                        <Link to="reports">Get Reports</Link>
                        <span className="pull-right-container"><i className="fa fa-angle-left"></i></span>
                    </li>
                </ul>
            </div>
        )
    }
}