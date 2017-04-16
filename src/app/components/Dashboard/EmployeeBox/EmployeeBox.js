import React, { Component } from 'react';
import '../../../../styles/components/EmployeeBox.css';

import { Link } from 'react-router';

import employee from '../../../../static/images/employee.png';


export default class EmployeeBox extends Component {

    addColor() {
        switch (this.props.jobTitle.slice(0,13)) {
            case 'President': return '-red';
            case 'VP Sales':
            case 'VP Marketing':
                return '-orange';
            case 'Sales Manager':
            case 'Sale Manager':
                return '-green';
            default:
                return '-blue';
        }
    }

    render() {
        return (
            <div className="employee-box">
                <div className={`header-part box${this.addColor()}`}>
                    <h4 className="employee-name">{this.props.name}</h4>
                    <span className="job-title">{this.props.jobTitle}</span>
                </div>
                <div className="bottom-part">
                    <ul>
                        <li><span>Email:</span>{this.props.email}</li>
                        <li><span>Office:</span>
                            <Link to={`/office/${this.props.office.officeCode}`}>{this.props.office.city}</Link>
                        </li>
                        {this.props.reportsTo ?
                            <li>
                                <span>Reports to:</span>
                                <Link to={`employees/${this.props.reportsTo.employeeNumber}`} >
                                    {`${this.props.reportsTo.firstName} ${this.props.reportsTo.lastName}`}
                                </Link>
                            </li> : ''}
                        <li><span>Extension:</span>{this.props.extension}</li>
                    </ul>
                    <button className={`btn btn${this.addColor()}`}>
                        <Link to={`/employees/${this.props.number}`} >More info</Link>
                    </button>
                </div>
                <div className="profile-image">
                    <img src={employee} alt="Profile"/>
                </div>
            </div>
        )
    }
}