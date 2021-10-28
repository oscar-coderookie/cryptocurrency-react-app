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
            <p className="d-none d-md-flex">Inicio</p>
            <span className="mobile-icons fas fa-home d-flex d-md-none"></span>
          </NavLink>
        </li>
        <li>
          <SubmenuMarket />
        </li>
        <li>
          <NavLink className="navbar-links" to="/contact">
            <p className="d-none d-md-flex">Contacto</p>
            <span className="mobile-icons d-flex d-md-none fas fa-id-badge"></span>
          </NavLink>
        </li>
        {hasUser ? null : (
          <li>
            <NavLink className="navbar-links" to="/register">
              <p className=" d-none d-md-flex">Registro</p>
              <span className="mobile-icons d-flex d-md-none fas fa-user-plus"></span>
            </NavLink>
          </li>
        )}
        <NavLink className="navbar-links" to="/login">
          <span className="mobile-icons fas fa-sign-in-alt"></span>
        </NavLink>
      </ul>
      {hasUser ? <span onClick={onLogout} className="navbar-links-logout fas fa-sign-out-alt mx-2"></span> : null}
    </div>
  );
};

export default withRouter(NavLinks);
