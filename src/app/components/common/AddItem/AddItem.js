import React, {Component} from 'react';

const iconStyles = {
    display: 'inline-block',
    position: 'relative',
    width: '50px',
    height: '25px',
    left: '10px',
    cursor: 'pointer',
};

const wrapperStyles = {
    display: 'inline-block',
    position: 'absolute',
    width: '50px',
    height: '25px',
    right: '5px',
    top: '50%',
    transform: 'translateY(-50%)',
};

const formStyles = {
    position: 'absolute',
    top: '50%',
    left: '100%',
    zIndex: 99,
    backgroundColor: '#fff',
    border: '1px solid #f4f4f4',
    width: '380px',
    height: 'auto',
    padding: '10px 5px'
};

const buttonStyles = {
    width: '75%',
    margin: '10px auto',
};

const inputStyle = {
    padding: '0 10px',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    outline: 'none',
    border: '1px solid #eee',
    height: '30px',
};

const labelStyles = {
    fontSize: '13px',
    marginRight: '5px'
};

export default class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            isShowed: false,
            customerNumber: 0,
            validated: '',
        };
        this.validateInput = this.validateInput.bind(this);
    }

    validateInput(e) {
        if (!(!isNaN(parseFloat(this.state.customerNumber))
            && isFinite(this.state.customerNumber))) { //Check if input value is not a number
            this.setState({
                validated: false
            });
            e.preventDefault();
        } else {
            let self = this;
            setTimeout(function () {
                self.setState({
                    isShowed: false,
                    validated: true
                });
            },2000)
        }
    }

    render() {
        return (
            <div className="add-form">
                <div className="wrapper" style={wrapperStyles}>
                    <i className="addItem" style={iconStyles} title="Add Customer"
                       onClick={() => {this.setState({isShowed: !this.state.isShowed})}}/>
                </div>
                <form action={'/customers/' + this.state.customerNumber}
                      method="POST"
                      onSubmit={this.validateInput}
                      target="result"
                      className={this.state.isShowed ? 'visible' : 'hidden'} style={formStyles}>
                    <label htmlFor="customerNumber" style={labelStyles}>Enter Customer Number:</label>
                    <input type="text" style={inputStyle} name="customerNumber" onChange={(e) => {this.setState({
                        customerNumber: +e.target.value
                    })}}/>
                    <button type="submit" className="btn" style={buttonStyles}>Add Customer</button>
                    <iframe height="40" frameBorder="0" name="result"></iframe>
                    <p>{!this.state.validated ? 'Enter a number!' : ''}</p>
                </form>
            </div>
        )
    }
}