import React, { Component } from 'react';
import '../../components/Navbar/Navbar'
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar/Navbar';

class AllTeamsPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Teams</h1>
            </div>
        );
    }
}

AllTeamsPage.propTypes = {

};

export default AllTeamsPage;