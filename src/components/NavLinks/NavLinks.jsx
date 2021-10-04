import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { SubmenuMarket } from "..";
import "./NavLinks.scss";

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
          <SubmenuMarket />
        </li>
        <li>
          <NavLink className="navbar-links" to="/contact">
            Contacto
          </NavLink>
        </li>
        {hasUser ? null : (
          <li>
            <NavLink className="navbar-links" to="/register">
              Registro
            </NavLink>
          </li>
        )}
        {hasUser ? <span onClick={onLogout} className="navbar-links-span fas fa-sign-out-alt mx-2"></span> : null}
      </ul>
    </div>
  );
};

export default withRouter(NavLinks);
