import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav class="navBar">
        <NavLink  class="NavLink" to="/">
          <button class="navButton">
            Register
          </button>
        </NavLink>
          <NavLink  to="/login">
          <button class="navButton">
            Login
          </button>
          </NavLink>
          <NavLink  to="/Profile">
          <button class="navButton">
            SunnyScore
          </button>
          </NavLink>
          <NavLink  to="/All">
          <button class="navButton">
            All Cities
          </button>
          </NavLink>
    </nav>
  )
}