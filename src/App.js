import React, { Component } from 'react';

import { Provider } from 'react-redux';
import createStore from './app/store/store';

export default class Main extends Component {

    render() {
        const {dashboard, sidebar} = this.props;
        return (
            <Provider store={createStore}>
                <div className="">
                    {sidebar}
                    {dashboard}
                </div>
            </Provider>
        )
    }
}