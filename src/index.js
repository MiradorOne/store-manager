import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from './App';
import Dashboard from './app/containers/MainDashboard';
import Customers from './app/containers/Customers';
import Employees from './app/containers/Employees';
import Sidebar from './app/containers/Sidebar';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute components={{dashboard: Dashboard, sidebar: Sidebar}}/>
        </Route>
        <Route path="/customers" component={App}>
            <IndexRoute components={{dashboard: Customers, sidebar: Sidebar}}/>
        </Route>
        <Route path="/employees" component={App}>
            <IndexRoute components={{dashboard: Employees, sidebar: Sidebar}}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
