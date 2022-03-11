import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  margin: "0 6px 6px",
  background: "blue",
  color: "white",
};

const Navbar = () => {
  return (
    <div>
      <NavLink to="/notes" style={link}>
        Notes
      </NavLink>
      <NavLink to="/" style={link}>
        Add A note
      </NavLink>
    </div>
  );
};

export default Navbar;
