import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import house from "../../assets/house.webp";
import fields from "../../assets/fields.jpeg";

const Header = () => {
  return (
    <div className="header">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "activeClass" : "")}
        end
      >
        <img src={house} /> House
      </NavLink>
      <NavLink
        to="/fields"
        className={({ isActive }) => (isActive ? "activeClass" : "")}
      >
        <img src={fields} /> Fields
      </NavLink>
    </div>
  );
};

export default Header;
