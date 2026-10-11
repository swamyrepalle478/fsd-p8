import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <h2 className="logo">Router Demo</h2>

      <div className="nav-links">
        <NavLink to="/" end className={navClass}>
          Home
        </NavLink>

        <NavLink to="/about" className={navClass}>
          About
        </NavLink>

        <NavLink to="/dashboard" className={navClass}>
          Dashboard
        </NavLink>

        <NavLink to="/user/1" className={navClass}>
          User Profile
        </NavLink>
      </div>

      <button className="theme-button" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}

export default Navbar;
