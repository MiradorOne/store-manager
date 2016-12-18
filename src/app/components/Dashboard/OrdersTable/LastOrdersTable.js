import React, {Component} from 'react';

import load from '../../../request';

export default class LastOrdersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
        this.getTableData = this.getTableData.bind(this);
        this.getTableData();
    }

    getTableData() {
        load(`/api/ordertable/?limit=${this.props.dataLimit ? this.props.dataLimit : 25}`).then(data => {
            this.setState({
                data: JSON.parse(data)
            })
        })
    }

    test() {
        console.log('clicked');
    }

    render() {
        const showButtons = () => {
            let array = [];
            if (this.props.dataPerPage) {
                let result = Math.ceil(this.state.data.length / +this.props.dataPerPage);
                for (let i = 1; i <= result; i++) {
                    array.push(i);
                }
                return array.map(value => {
                    return (
                        <button key={value} onClick={this.test.bind(this)} className="btn btn-blue">{value}</button>
                    )
                })
            }
        };

        const listData = this.state.data.map((value, i) => {
            if (this.state.data.length === 0) {
                return (
                    <tr>
                        <td>No result =(</td>
                    </tr>
                )
            } else {
                return (
                    <tr key={i}>
                        <td>{value.orderNumber}</td>
                        <td>{value.productCode}</td>
                        <td>{value.quantityOrdered}</td>
                        <td>{value.priceEach}</td>
                        <td>{value.orderLineNumber}</td>
                        <td>{value.customerNumber}</td>
                        <td>{value.status}</td>
                    </tr>
                )
            }
        });
        return (
            <div className="orders-table">
                <table>
                    <thead >
                        <tr className="title" >
                            <td colSpan="6">Latest Orders</td>
                            <td></td>
                        </tr>
                        <tr className="headers">
                            <td>Order number</td>
                            <td>Product code</td>
                            <td>Quantity</td>
                            <td>Each Price</td>
                            <td>Order Line Number</td>
                            <td>Customer Number</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                    {listData}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                {showButtons()}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}