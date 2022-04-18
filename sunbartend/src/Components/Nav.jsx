import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav class="navBar">
      <div>
        <NavLink style={{ textDecoration: 'none' }} class="NavLink" to="/"> ☀️Register☀️ </NavLink>
        <div>
          <NavLink style={{ textDecoration: 'none' }} to="/login">Login ☀️ </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to="/Profile">Profile ☀️ </NavLink>
          <NavLink style={{ textDecoration: 'none' }} to="/All">All Cities</NavLink>

        </div>
      </div>
    </nav>
  )
}