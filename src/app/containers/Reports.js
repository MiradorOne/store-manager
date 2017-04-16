import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchReportByDate} from '../actions/fetchActions';
import moment from 'moment';

import DailyReport from '../components/Dashboard/Forms/DailyReport';
import {ReportsList} from '../components/Dashboard/Lists/ReportsList';

export class Reports extends Component {
    constructor() {
        super();
        this.state = {
            selectedDate: moment(),
            selectedAction: 'All',
            selectedInfo: 'All',
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.getReportByDate = this.getReportByDate.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(fetchReportByDate({
            date: moment().format('YYYY-MM-DD'),
            action: 'All',
            info: 'All'
        }));
    }

    handleDateChange(value) {
        this.setState({
            selectedDate: value
        })
    }

    handleSelectChange(selected,e) {
        this.setState({
            ...this.state,
            [selected]: e.target.value
        })
    }

    getReportByDate(date) {
        this.props.dispatch(fetchReportByDate(date));
    }

    render() {
        return (
            <main className="dashboard">
                <h2>Reports</h2>
                <DailyReport getData={this.getReportByDate}
                             handleDateChange={this.handleDateChange}
                             selectedDate={this.state.selectedDate}
                             selectedInfo={this.state.selectedInfo}
                             selectedAction={this.state.selectedAction}
                             handleSelectChange={this.handleSelectChange}/>
                <ReportsList reports={this.props.data} selectedDate={this.state.selectedDate}/>
            </main>
        )
    }
}

function mapStateToProps(store) {
    return {
        data: store.reports
    }
}

export default connect(mapStateToProps)(Reports);
