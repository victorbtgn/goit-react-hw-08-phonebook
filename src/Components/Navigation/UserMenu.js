import React from 'react';
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOps from '../../redux/auth/auth-operations';

const UserMenu = ({ name, onLogout }) => (
  <>
    <span>Welcome {name}</span>
    &#160; &#124; &#160;
    <button type="button" className="logOutBtn" onClick={onLogout}>
      Log out
    </button>
  </>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOps.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
