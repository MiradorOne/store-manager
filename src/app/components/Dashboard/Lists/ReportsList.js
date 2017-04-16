import React from 'react';
import '../../../../styles/components/ReportsList.css';
import moment from 'moment';

export const ReportsList = ({reports, selectedDate}) => {

    const list = Object.keys(reports).map((value, i) => {
        const report = reports[value];
        if (report.Action === 'Add') {
            return (
                <li key={i}>
                    <strong>Added:</strong>
                    <ul className="second-level">
                        <li>Orders: {report.orders || report.Orders}</li>
                        <li>Payments: {report.payments || report.Payments}</li>
                        <li>Customers: {report.customers || report.Customers}</li>
                    </ul>
                </li>
            )
        } else if (report.Action === 'Remove') {
            return (
                <li key={i}>
                    <strong>Removed:</strong>
                    <ul className="second-level">
                        <li>Orders: {report.orders || report.Orders}</li>
                        <li>Payments: {report.payments || report.Payments}</li>
                        <li>Customers: {report.customers || report.Customers}</li>
                    </ul>
                </li>
            )
        } else if (report.Action === 'Update') {
            return (
                <li key={i}>
                    <strong>Updated:</strong>
                    <ul className="second-level">
                        <li>Orders: {report.orders || report.Orders}</li>
                        <li>Payments: {report.payments || report.Payments}</li>
                        <li>Customers: {report.customers || report.Customers}</li>
                    </ul>
                </li>
            )
        }
    });

    return (
        <div className="reports-list component-border-red">
            <h4>{moment(selectedDate).format('YYYY-MM-DD')}</h4>
            <ul className="first-level">
                {list.length > 0 ? list : <h5>No reports</h5>}
            </ul>
        </div>
    )
};