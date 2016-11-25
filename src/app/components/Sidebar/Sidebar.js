import React, {Component} from 'react';

import Profile from './Profile';
import Search from './Search';
import Navigation from './Navigation';

export default class Sidebar extends Component {


    render() {
        return (
            <aside className="main-sidebar">
                <Profile/>
                <Search/>
                <Navigation/>
            </aside>
        )
    }
}