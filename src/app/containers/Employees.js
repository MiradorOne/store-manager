import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEmployeesData } from '../actions/employeesActions';
import { fetchOfficesData } from '../actions/officesActions';
import '../../styles/containers/Employees.css';

import { createFilter } from 'react-search-input';

import EmployeeBox from '../components/Dashboard/EmployeeBox/EmployeeBox';

const KEYS_TO_FILTER = ['firstName', 'lastName', 'employeeNumber', 'jobTitle'];

export class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            displayModeGrid: 'grid'
        };
        this.searchUpdated = this.searchUpdated.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(fetchOfficesData());
        this.props.dispatch(fetchEmployeesData());
    }

    searchUpdated (e) {
        this.setState({searchTerm: e.target.value})
    }

    changeDisplayMode(mode,e) {
        this.setState({
            displayModeGrid: mode
        })
    }

    render() {
        const filteredData = Object.keys(this.props.employees)
            .map(key => this.props.employees[key])
            .filter(createFilter(this.state.searchTerm, KEYS_TO_FILTER));

        const employees = filteredData.map((value,i) => {
            return (
                <EmployeeBox
                    key={i}
                    number={value.employeeNumber}
                    name={`${value.firstName} ${value.lastName}`}
                    jobTitle={value.jobTitle}
                    email={value.email}
                    reportsTo={this.props.employees[value.reportsTo]}
                    extension={value.extension}
                    office={this.props.office[value.officeCode]}
                    officeCode={value.officeCode}
                />
            )
        });

        const noResult = (
            <h3 className="no-result">
                No Result
            </h3>
        );

        return (
            <main className="dashboard employees">
                <h2>Employees</h2>
                <div className="filters">
                    <input type="text" placeholder="Search employee" className='input-default' onChange={this.searchUpdated} />
                <div className="switch">
                    <button className="switch-grid active" title="Switch to grid display" onClick={this.changeDisplayMode.bind(this, 'grid')}/>
                    <button className="switch-list" title="Switch to list display" onClick={this.changeDisplayMode.bind(this, 'list')}/>
                </div>
                </div>
                <div className={this.state.displayModeGrid}>
                    {employees.length > 0 ? employees : noResult}
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