import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div>
    <div><Link to="/">Home</Link></div>
    <div><Link to="/dashboard">Dashboard</Link></div>
    <div><Link to="/stream-client/12345">Stream Client</Link></div>
    <div><Link to="/login">Login</Link></div>
  </div>
)

export default NavBar