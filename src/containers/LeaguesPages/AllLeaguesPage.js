import React, { Component } from 'react';
import '../../components/Navbar/Navbar'

import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';

class AllLeaguesPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Leagues</h1>
            </div>
        );
    }
}

AllLeaguesPage.propTypes = {

};

export default AllLeaguesPage;