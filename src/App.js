import React, {Component} from 'react';
import makeQuery from './api/connection';


import Sidebar from './app/components/Sidebar/Sidebar';
import Dashboard from './app/components/Dashboard/Dashboard';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            data: makeQuery('SELECT * FROM offices')
        }
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