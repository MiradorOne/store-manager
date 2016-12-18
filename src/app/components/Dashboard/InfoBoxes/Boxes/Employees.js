import React, { Component } from 'react';


export default class Employees extends Component {

    render() {
        return (
            <div className="info-box employees">
                <div className="icon infobox-icon icon-worker box-blue">
                </div>
                <div className="box-info">
                    <h4>Employees:</h4>
                    <span className="box-value">{this.props.data}</span>
                </div>
            </div>
        )
    }
}