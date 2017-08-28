import React, { Component } from 'react';

import '../../../../styles/components/CustomerDetails.css'

export default class CustomersDetails extends Component {

    render() {
        const selectedCustomer = this.props.data.map(customer => {
            return customer.customerNumber + ' ' + customer.customerName;
        });
        const details = this.props.data.map((detail, i) => {
            return (
                <ul className="details" key={i}>
                    <li>{detail.contactLastName || 'Not specified'}</li>
                    <li>{detail.contactFirstName || 'Not specified'}</li>
                    <li>{detail.phone || 'Not specified'}</li>
                    <li>{detail.addressLine1 + (detail.addressLine2 || ' ')}</li>
                    <li>{detail.city || 'Not specified'}</li>
                    <li>{detail.state || 'Not specified'}</li>
                    <li>{detail.postalCode || 'Not specified'}</li>
                    <li>{detail.country || 'Not specified'}</li>
                    <li>{detail.salesRepEmployeeNumber || 'Not specified'}</li>
                    <li>{detail.creditLimit || 'Not specified'}</li>
                </ul>
            )
        });
        return (
            <div className="customers-details component-border-red">
                <span className="list-title">{selectedCustomer}</span>
                <ul className="details-fields">
                    <li>Contact Last Name:</li>
                    <li>Contact First Name:</li>
                    <li>Phone:</li>
                    <li>Address:</li>
                    <li>City:</li>
                    <li>State:</li>
                    <li>Postal Code:</li>
                    <li>Country:</li>
                    <li>Sales Employee Number:</li>
                    <li>Credit Limit:</li>
                </ul>
                {details.length > 0 ? details :
                    <div className="info-message">
                        <span>Select customer to view details</span>
                    </div>
                }
            </div>
        )
    }
}