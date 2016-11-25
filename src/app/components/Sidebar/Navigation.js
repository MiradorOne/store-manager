import React, { Component } from 'react';

export default class Navigation extends Component {


    render() {
        return (
            <div className="navigation">
                <ul className="sidebar-menu">
                    <li className="list-title">Main Navigation</li>
                    <li>
                        <a href="#">Main</a>
                        <span className="pull-right-container"><i className="fa fa-angle-left"></i></span>
                    </li>
                    <li>
                        <a href="#">Customers</a>
                        <span className="pull-right-container"><i className="fa fa-angle-left"></i></span>
                    </li>
                    <li>
                        <a href="#">Employees</a>
                        <span className="pull-right-container"><i className="fa fa-angle-left"></i></span>
                    </li>
                    <li>
                        <a href="#">Offices</a>
                        <span className="pull-right-container"><i className="fa fa-angle-left"></i></span>
                    </li>
                    <li>
                        <a href="#">Product Lines</a>
                        <span className="pull-right-container"><i className="fa fa-angle-left"></i></span>
                    </li>
                </ul>
            </div>
        )
    }
}