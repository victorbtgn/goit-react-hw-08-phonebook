import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';

const AppBar = ({ isAuthenticated }) => (
  <header>
    <Logo />
    {isAuthenticated && (
      <NavLink exact to="/contacts" className="headerLink" activeClassName="activeHeaderLink">
        Contacts
      </NavLink>
    )}
    <Navigation />
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
