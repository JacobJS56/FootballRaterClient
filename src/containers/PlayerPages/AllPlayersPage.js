import React, { Component } from 'react';
import '../../components/Navbar/Navbar'

import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';

class AllPlayersPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Players</h1>
            </div>
        );
    }
}

AllPlayersPage.propTypes = {

};

export default AllPlayersPage;