import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/navbar.css";

const AuthenticatedLinks = () => {
  return (
    <React.Fragment>
      <li>
        <NavLink className ="navtext"  to="/meals/create">New Meal</NavLink>
      </li>
      <li>
        <NavLink className ="navtext"  to="/meals/list">Meals</NavLink>
      </li>
      <li>
        <NavLink className ="navtext"  to="/groceries/list">Groceries</NavLink>
      </li>
      <li>
        <NavLink className ="navtext"  to="/">Log out</NavLink>
      </li>
    </React.Fragment>
  );
};

export default AuthenticatedLinks;
