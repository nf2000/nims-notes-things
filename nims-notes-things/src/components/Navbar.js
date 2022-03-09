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
      <NavLink
        to="/notes"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Notes
      </NavLink>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add A note
      </NavLink>
    </div>
  );
};

export default Navbar;
