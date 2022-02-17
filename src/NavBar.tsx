import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="nav-bg">
      <h1>The Wiz Blog</h1>
      <ul className="nav-menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">New Blog</NavLink>
      </ul>
    </div>
  );
}

export default NavBar;
