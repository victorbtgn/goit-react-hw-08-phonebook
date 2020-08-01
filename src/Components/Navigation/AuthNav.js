import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <>
    <NavLink exact to="/register" className="headerLink" activeClassName="activeHeaderLink">
      Sign in
    </NavLink>
    &#124; &#160;
    <NavLink exact to="/login" className="headerLink" activeClassName="activeHeaderLink">
      Log in
    </NavLink>
  </>
);

export default AuthNav;
