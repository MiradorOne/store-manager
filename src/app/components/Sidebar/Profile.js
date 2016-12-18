import React, { Component } from 'react';

export default class Profile extends Component {


    render() {
        return (
            <div className="profile">
                <div className="profile-icon"></div>
                <div className="info">
                    <p className="profile-name">Manager</p>
                    <p className="status">Online</p>
                </div>
            </div>
        )
    }
}