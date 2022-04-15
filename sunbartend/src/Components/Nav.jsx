import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <div>
        <NavLink to="/">Register</NavLink>
        <div>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/Profile">Profile</NavLink>
        </div>
      </div>
    </nav>
  )
}