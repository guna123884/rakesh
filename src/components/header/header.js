import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeClass" : "")}
        end
      >
        House
      </NavLink>
      <NavLink
        to="/fields"
        className={({ isActive }) => (isActive ? "activeClass" : "")}
      >
        Fields
      </NavLink>
    </div>
  );
};

export default Header;
