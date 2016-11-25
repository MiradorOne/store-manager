import React, { Component } from 'react';

export default class Profile extends Component {


    render() {
        return (
            <div className="profile">
                <img src="http://lorempixel.com/45/45/abstract" alt="profile-image" className=""/>
                <div className="info">
                    <p className="profile-name">Manager</p>
                    <p className="status">Online</p>
                </div>
            </div>
        )
    }
}