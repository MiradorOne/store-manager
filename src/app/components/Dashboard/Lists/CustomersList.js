import React, {Component} from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import AddItem from '../../common/AddItem/AddItem';

const KEYS_TO_FILTERS = ['customerNumber', 'customerName'];

export default class CustomersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 1,
            searchTerm: '',
            activeCustomerNum: 0,
        };
        this.searchUpdated = this.searchUpdated.bind(this);
    }

    componentWillReceiveProps (nextProps) {
        this.setState({activeCustomerNum: nextProps.activeCustomerNumber})
    }

    changePageNumber(number) { // If number doesn't equal 0 and index of the last page
        if (number !== 0 && !(number > Math.ceil(this.props.data.length / +this.props.dataPerPage))) {
            this.setState({
                pageNumber: number,
            });
        }
    }

    searchUpdated (term) {
        this.setState({
            searchTerm: term,
            pageNumber: 1
        });
    }

    render() {
        const filteredList = this.props.data.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

        const showPagination = () => {
            let array = [];
            if (this.props.dataPerPage) {
                let result = Math.ceil(this.props.data.length / +this.props.dataPerPage);
                for (let i = 1; i <= result; i++) {
                    array.push(i);
                }
                return array.map((value, i) => {
                    if (value === this.state.pageNumber) {
                        return (
                            <div className="buttons" key={i}>
                                <button className="btn btn-arrow-pagination"
                                        onClick={this.changePageNumber.bind(this, value - 1)}>«
                                </button>
                                <button onClick={this.changePageNumber.bind(this, value)}
                                        className="btn btn-arrow-pagination btn-green">{this.state.pageNumber}</button>
                                <button className="btn btn-arrow-pagination"
                                        onClick={this.changePageNumber.bind(this, value + 1)}>»
                                </button>
                            </div>
                        )
                    }
                    return null;
                })
            }
            return true;
        };

        /* Algorithm for page pagination: (DataPerPage * In-1 <= In <= DataPerPage * In),
         * where In = button index
         * */
        const list = filteredList.map((value, i) => {
            if (i <= (this.props.dataPerPage * this.state.pageNumber) &&
                i >= (this.props.dataPerPage * (this.state.pageNumber - 1))) {
                return (
                    <li key={i} className={this.state.activeCustomerNum === value.customerNumber ? 'active-customer' : ''}
                        onClick={this.props.handleClick.bind(this, value.customerNumber)}>
                        <span className="customer-number">{value.customerNumber}</span>
                        <span className="customer-name">{value.customerName}</span>
                    </li>
                )
            }
            return null;
        });

        return (
            <div className="customers-list">
                <ul className="component-border-green">
                    <li className="list-title">Customers List
                        <AddItem/>
                    </li>
                    {list}
                    <li className="pagination">
                        <SearchInput className="list-search" onChange={this.searchUpdated}/>
                        {this.state.searchTerm.length === 0 ? showPagination() : ''}
                    </li>
                </ul>
            </div>
        )
    }
}