import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

const AuthenticatedLinks = () => {
  return (
    <React.Fragment>
      <li>
        <NavLink className ="navtext"  to="/">New Meal</NavLink>
      </li>
      <li>
        <NavLink className ="navtext"  to="/">Log out</NavLink>
      </li>
    </React.Fragment>
  );
};

export default AuthenticatedLinks;
