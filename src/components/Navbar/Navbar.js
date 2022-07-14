import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div >
        <nav className="stroke">
          <ul>
            <li>
              <img alt="Logo" />
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#/Competitions">Competitions</a>
            </li>
            <li>
              <a href="/#/teams">Teams</a>
            </li>
            <li>
                <a href="/#/players">Players</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

Navbar.propTypes = {};

export default Navbar;
