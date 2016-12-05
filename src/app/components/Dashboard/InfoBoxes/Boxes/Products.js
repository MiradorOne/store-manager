import React, { Component } from 'react';

export default class Products extends Component {


    render() {
        return (
            <div className="info-box employees">
                <div className="icon infobox-icon icon-product box-orange"></div>
                <div className="box-info">
                    <h4>Products:</h4>
                    <span className="box-value">120</span>
                </div>
            </div>
        )
    }
}