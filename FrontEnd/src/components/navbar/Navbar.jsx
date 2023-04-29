


import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          City Sherpa
        </a>
        <div className="navbar-menu">
          <ul className="navbar-items">
            <li>
            <NavLink to="/home" style={{ textDecoration: 'none' }}><span>Home</span></NavLink>
            </li>
            <li>
            <NavLink to="/map" style={{ textDecoration: 'none' }}><span>Advisor</span></NavLink>
            </li>
            <li>
            <NavLink to="/budget" style={{ textDecoration: 'none' }}><span>Budget Calculator</span></NavLink>
            </li>
            <li>
            <NavLink to="/recommend" style={{ textDecoration: 'none' }}><span>Recommendation</span></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
