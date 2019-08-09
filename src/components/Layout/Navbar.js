import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import AuthenticatedLinks from "./authenticatedLinks";
//import PublicLinks from "./publicLinks";
import "../../style/navbar.css";

class Navbar extends Component {
  componentDidMount() {
    // Auto initialize materialize collapsible mobile classes
    M.AutoInit();
  }
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper  mynav">
          <Link to="/" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons navtext">menu</i>
          </Link>
          <ul className="right hide-on-med-and-down">
            {/* Since I'm moking the loged in senario */ }
            <AuthenticatedLinks />
          </ul>
        </nav>
        <ul className="sidenav" id="mobile-demo">
          <AuthenticatedLinks />
        </ul>
      </div>
    );
  }
}

export default Navbar;
