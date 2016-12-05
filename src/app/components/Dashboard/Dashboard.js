import React, { Component } from 'react';

import InfoBoxes from './InfoBoxes/InfoBoxes';

export default class Dashboard extends Component {

    render() {
        return (
            <main className="dashboard">
                <h2>Dashboard</h2>
                <InfoBoxes/>
            </main>
        )
    }
}