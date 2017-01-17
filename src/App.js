import React, {Component} from 'react';

export default class Main extends Component {

    render() {
        const {dashboard, sidebar} = this.props;
        return (
            <div className="">
                {sidebar}
                {dashboard}
            </div>
        )
    }
}