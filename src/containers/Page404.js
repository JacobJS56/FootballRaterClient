import React, { Component } from 'react';
import '../components/Navbar/Navbar'
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/Navbar';

class Page404 extends Component {
    render() {
        return (
            <div>
            <Navbar />
                <h1>404 Component</h1>
            </div>
        );
    }
}

Page404.propTypes = {

};

export default Page404;