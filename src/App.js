import React, {Component} from 'react';

import Sidebar from './app/components/Sidebar/Sidebar';
import Dashboard from './app/components/Dashboard/Dashboard';
import load from './app/request';

export default class Main extends Component {
    constructor() {
        super();
        this.getData = this.getData.bind(this);
        this.state = {
            data: this.getData()
        }
    }

    getData() {
        load('http://localhost:8000/test/').then(res => {
            console.info(res);
            return res;
        });
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