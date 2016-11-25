import React, { Component } from 'react';

import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

export default class App extends Component {

    render() {
        return (
            <div className="">
                    <Sidebar/>
                    <Dashboard/>
            </div>
        )
    }
}