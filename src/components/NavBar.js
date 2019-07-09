import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/dashboard">Dashboard</Link></div>
      <div><Link to="/stream-client/12345">Stream Client</Link></div>
      <div><Link to="/voice">Voice Command Client</Link></div>
      { loginLogoutButton(props) }
    </div>
  )
}

const loginLogoutButton = (props) => {
  const { loginState, onClick } = props;
  const { isAuthenticated } = loginState;

  if (isAuthenticated) {
    return (
      <button onClick={onClick}>Logout</button>
    );
  } else {
    return (
      <div><Link to="/login">Login</Link></div>
    );
  }
}

NavBar.propTypes = {
  loginState: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};

export default NavBar;