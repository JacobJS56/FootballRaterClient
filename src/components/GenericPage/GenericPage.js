import React, { Component } from 'react';

import './GenericPage.css';

class GenericPage extends Component {
        constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className="main">
                <nav class="stroke">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </nav>
                <div className="line"/>
                <div className="Banner">
                    <p className="FansText">FANS</p>
                    <p className="OpinionText">OPINION</p>
                </div>
                <div className="line"/>
            </div>
        );
    };
};

export default GenericPage;