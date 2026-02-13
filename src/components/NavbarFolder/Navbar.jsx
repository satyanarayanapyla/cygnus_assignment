import React from "react";
import "./Navbar.css";
import { FaBriefcase, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate=useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <div className="logo">
          <FaBriefcase className="logo-icon" />
          <span>JobPortal</span>
        </div>

        {/* Jobs Tab */}
        <ul className="nav-links">
          <li className="active">
            <FaBriefcase className="nav-icon" />
            Jobs
          </li>
        </ul>

        {/* Logout Button */}
        <button className="logout-btn" onClick={()=>navigate('/')}>
          <FaSignOutAlt className="nav-icon" />
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
