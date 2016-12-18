import React, { Component } from 'react';

export default class TotalOrders extends Component {


    render() {
        return (
            <div className="info-box employees">
                <div className="icon infobox-icon icon-orders box-green"></div>
                <div className="box-info">
                    <h4>Total orders:</h4>
                    <span className="box-value">{this.props.data}</span>
                </div>
            </div>
        )
    }
}