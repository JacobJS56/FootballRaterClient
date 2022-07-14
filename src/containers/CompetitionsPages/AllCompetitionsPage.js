import React, { Component } from 'react';
import '../../components/Navbar/Navbar'

import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';

class AllCompetitionsPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Competitions</h1>
            </div>
        );
    }
}

AllCompetitionsPage.propTypes = {

};

export default AllCompetitionsPage;