import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Header = props => {
  const { branding } = props;

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <NavLink exact to="/" className="navbar-brand">
          {branding}
        </NavLink>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                <i className="fas fa-home"> Home</i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact/add" className="nav-link">
                <i className="fas fa-plus"> Add</i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/about" className="nav-link">
                <i className="fas fa-question"> About</i>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.prototype = {
  branding: PropTypes.string.isRequired
};

export default Header;
