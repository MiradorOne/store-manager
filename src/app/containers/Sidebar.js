import React, {Component} from 'react';

import Profile from '../components/Sidebar/Profile';
import Search from '../components/Sidebar/Search';
import Navigation from '../components/Sidebar/Navigation';

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