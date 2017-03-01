import React, {Component} from 'react';
import dateFormat from 'dateformat';

export default class CustomerPayments extends Component {

    render() {
        const noResult = (
            <ul className="details">
                <li><span className="title">Check Number:</span></li>
                <li><span className="title">Payment Data:</span></li>
                <li><span className="title">Amount:</span></li>
                <div className="info"></div>
            </ul>
        );
        const payments = this.props.data.map((payment, i) => {
            return (
                <ul className="details" key={i}>
                    <li><span className="title">Check Number:</span> {payment.checkNumber}</li>
                    <li><span className="title">Payment Data:</span> {dateFormat(payment.paymentDate, "dddd, mmmm dS, yyyy, h:MM:ss TT")}</li>
                    <li><span className="title">Amount:</span> {payment.amount}</li>
                </ul>
            )
        });
        return (
            <div className="customer-payments component-border-orange">
                <span className="list-title">Payments</span>
                {this.props.data.length > 0 ? payments : noResult}
            </div>
        )
    }
}