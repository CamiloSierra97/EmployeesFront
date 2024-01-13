import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        className={({ isActive }) => (isActive ? "link__active" : "link")}
        to="/me"
      >
        <div className="header__logo__container">
          <h1 className="header__logo">
            <i className="bx bx-paste"></i>
          </h1>
        </div>
      </NavLink>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <NavLink
              className={({ isActive }) => (isActive ? "link__active" : "link")}
              to="/"
            >
              <p className="header__item-text">Login</p>
            </NavLink>
          </li>
          <li className="header__item">
            <NavLink
              className={({ isActive }) => (isActive ? "link__active" : "link")}
              to="/me"
            >
              <p className="header__item-text">All employees</p>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
