import React, { Component } from 'react';

export default class TotalCustomers extends Component {


    render() {
        return (
            <div className="info-box employees">
                <div className="icon infobox-icon icon-customer box-purple"></div>
                <div className="box-info">
                    <h4>Total customers:</h4>
                    <span className="box-value">120</span>
                </div>
            </div>
        )
    }
}