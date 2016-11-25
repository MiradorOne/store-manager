import React, {Component} from 'react';

import Sidebar from './app/components/Sidebar/Sidebar';
import Dashboard from './app/components/Dashboard/Dashboard';

export default class Main extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="">
                <Sidebar/>
                <Dashboard/>
            </div>
        )
    }
}