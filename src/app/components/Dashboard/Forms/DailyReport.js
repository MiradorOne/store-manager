import React, {Component} from 'react';

import '../../../../styles/components/DailyReport.css';
import 'react-datepicker/dist/react-datepicker.min.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class DailyReport extends Component {

    preventDefault(e) {
        e.preventDefault();
    }
    //TODO: Get from database date of last report
    render() {
        return (
            <div className="daily-reports component-border-blue">
                <h4>Daily Reports
                    <span>Last report: 2017-04-16</span>
                </h4>

                <form action="#" onSubmit={this.preventDefault}>
                    <label htmlFor="datepicker">Select report date:</label>
                    <DatePicker
                        dateFormat="YYYY-MM-DD"
                        selected={this.props.selectedDate}
                        onChange={this.props.handleDateChange}
                        required={true}
                        maxDate={moment()}
                        className="input-default"
                         />
                    <label htmlFor="action-type">Choose an action:</label>
                    <select name="action-type" id="action-type" className="input-default"
                            disabled={this.props.selectedInfo !== 'All' ? 'disabled' : ''}
                            onChange={this.props.handleSelectChange.bind(this,'selectedAction')}>
                        <option>All</option>
                        <option>Add</option>
                        <option>Update</option>
                        <option>Remove</option>
                    </select>
                    <label htmlFor="info-picker">Choose info:</label>
                    <select name="info-picker" id="info-picker" className="input-default"
                            onChange={this.props.handleSelectChange.bind(this,'selectedInfo')}>
                        <option>All</option>
                        <option>Customers</option>
                        <option>Orders</option>
                        <option>Payments</option>
                    </select>
                    <button className="btn btn-blue" onClick={() =>
                    {this.props.getData(
                        {
                            date: moment(this.props.selectedDate).format('YYYY-MM-DD'),
                            action: this.props.selectedAction,
                            info: this.props.selectedInfo
                        }
                    )}}>Get Reports</button>
                </form>
            </div>
        )
    }
}

DailyReport.propType = {
    handleDateChange: React.PropTypes.func.isRequired,
    handleSelectChange: React.PropTypes.func.isRequired,
    getData: React.PropTypes.func,
    selectedDate: React.PropTypes.string.isRequired,
};

DailyReport.defaultProps = {
    selectedDate: moment().format('YYYY-MM-DD'),
};