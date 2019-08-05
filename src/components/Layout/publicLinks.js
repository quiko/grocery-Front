import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const PublicLinks = () => {
  return (
    <React.Fragment>
      <li>
        <NavLink className ="navtext" to="/">Signup</NavLink>
      </li>
      <li>
        <NavLink className ="navtext"  to="/">Login</NavLink>
      </li>
    </React.Fragment>
  );
};

export default PublicLinks;
