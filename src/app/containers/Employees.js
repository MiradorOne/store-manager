import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEmployeesData } from '../actions/employeesActions';
import { fetchOfficesData } from '../actions/officesActions';

import EmployeeBox from '../components/Dashboard/EmployeeBox/EmployeeBox';

export class Dashboard extends Component {

    render() {
        return (
            <main className="dashboard employees">
                <h2>Employees</h2>
                <div className="grid">
                    {Object.keys(this.props.employees).map(key => {
                        return (
                            <EmployeeBox
                                key={key}
                                number={this.props.employees[key].employeeNumber}
                                name={`${this.props.employees[key].firstName} ${this.props.employees[key].lastName}`}
                                jobTitle={this.props.employees[key].jobTitle}
                                email={this.props.employees[key].email}
                                reportsTo={this.props.employees[this.props.employees[key].reportsTo]}
                                bossNumber={this.props.employees[key].reportsTo}
                                extension={this.props.employees[key].extension}
                                office={this.props.office[this.props.employees[key].officeCode]}
                                officeCode={this.props.employees[key].officeCode}
                            />
                        )
                    })}
                </div>
            </main>
        )
    }
}

function mapStateToProps(store) {
    return {
        office: store.offices,
        employees: store.employees,
    }
}

export default connect(mapStateToProps)(Dashboard);