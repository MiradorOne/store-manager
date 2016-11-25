import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import './index.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}/>
    </Router>,
    document.getElementById('root')
);
