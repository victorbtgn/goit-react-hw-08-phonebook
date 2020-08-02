import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <>
    <NavLink exact to="/register" className="headerLink verticalBar" activeClassName="activeHeaderLink">
      Sign in
    </NavLink>
    <NavLink exact to="/login" className="headerLink" activeClassName="activeHeaderLink">
      Log in
    </NavLink>
  </>
);

export default AuthNav;
