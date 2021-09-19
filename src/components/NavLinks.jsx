import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import "./NavLinks.css";

const NavLinks = ({ show, onLogout, hasUser }) => {
  return (
    <div className={show ? "navbar active" : "navbar"}>
      <ul className="navbar-list">
        <li>
          <NavLink className="navbar-links" to="/">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-links" to="/market">
            Market
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-links" to="/contact">
            Contacto
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-links" to="/register">
            Registro
          </NavLink>
        </li>
        {hasUser ? (
          <button className="navbar-links btn  mx-3" onClick={onLogout}>
            <span className="fas fa-sign-out-alt mx-2"></span>
            Logout
          </button>
        ) : null}
      </ul>
    </div>
  );
};

export default withRouter(NavLinks);
