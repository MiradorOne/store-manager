import React, { Component } from 'react';
// import Connection from '../api/connection';

import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';

export default class Main extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="">
                {console.log(this.state.data)}
                    <Sidebar/>
                    <Dashboard/>
            </div>
        )
    }
}