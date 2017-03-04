import React, {Component} from 'react';

import Loading from '../../common/Loading/Loading';
import '../../../../styles/components/LastOrdersTable.css';

export default class LastOrdersTable extends Component {
    constructor() {
        super();
        this.state = {
            pageNumber: 1
        };
    }

    changePageNumber(number) {
        this.setState({
            pageNumber: number,
        });
    }

    render() {
        const showButtons = () => {
            let array = [];
            if (this.props.dataPerPage) {
                let result = Math.ceil(this.props.orders.length / +this.props.dataPerPage);
                for (let i = 1; i <= result; i++) {
                    array.push(i);
                }
                return array.map((value, i) => {
                    if (value === this.state.pageNumber) {
                        return (
                            <div className="buttons" key={i}>
                                <button className="btn btn-arrow-pagination btn-blue"
                                        onClick={this.changePageNumber.bind(this, value - 1)}>«
                                </button>
                                <button onClick={this.changePageNumber.bind(this, value)}
                                        className="btn btn-arrow-pagination btn-blue">{this.state.pageNumber}</button>
                                <button className="btn btn-arrow-pagination btn-blue"
                                        onClick={this.changePageNumber.bind(this, value + 1)}>»
                                </button>
                            </div>
                        )

                    }
                })
            }
            return true;
        };

        const listData = this.props.orders.map((value, i) => {
            let detailsArray = [];
            if (typeof this.props.details[value.detailsIds[0]] !== 'undefined') {
                value.detailsIds.map(id => {
                    detailsArray.push(this.props.details[id])
                })
            }

            if (this.props.orders.length === 0) {
                return (
                    <tr>
                        <td>No result =(</td>
                    </tr>
                )
            } else {
                /* Algorithm for page pagination: (DataPerPage * In-1 <= In <= DataPerPage * In),
                 * where In = button index
                 * */

                if ( i <= (this.props.dataPerPage * this.state.pageNumber) &&
                    i >= (this.props.dataPerPage * (this.state.pageNumber-1)) ) {
                    return (
                        <tr key={i}>
                            <td>{value.orderNumber}</td>
                            <td>{detailsArray.map((detail,i) => <p key={i}>{detail.productCode}</p>)}</td>
                            <td>{detailsArray.map((detail,i) => <p key={i}>{detail.quantityOrdered}</p>)}</td>
                            <td>{detailsArray.map((detail,i) => <p key={i}>{detail.priceEach}</p>)}</td>
                            <td>{detailsArray.map((detail,i) => <p key={i}>{detail.orderLineNumber}</p>)}</td>
                            <td>{value.customerNumber}</td>
                            <td>{value.status}</td>
                        </tr>
                    )
                }

            }
            return null;

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
                    {listData || <Loading/>}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                {showButtons() ? showButtons() : <Loading/>}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}