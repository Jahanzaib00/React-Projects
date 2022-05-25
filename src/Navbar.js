import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <NavLink to="/" className="navbar-brand">
          AirShare
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-wrapper collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <NavLink to="/" className="nav-item nav-link">
              Home
            </NavLink>
            <NavLink to="/howitworks" className="nav-item nav-link">
              How It Works
            </NavLink>
            <NavLink to="/products" className="nav-item nav-link">
              Products
            </NavLink>
            <NavLink to="/contact" className="nav-item nav-link">
              Contact
            </NavLink>
            <NavLink to="/shop" className="nav-item nav-link">
              Shop
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
