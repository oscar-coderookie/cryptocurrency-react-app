import React, { useContext, useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { SubmenuMarket } from "..";
import { UserContext } from "../../App";
import { logout } from "../../api/auth.api";
import "./NavLinks.scss";

const NavLinks = ({ show }) => {
  const user = useContext(UserContext);

  const logoutSesion = async () => {
    await logout();
  };

  console.log(user)

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

        {!user ? (
          <>
          <li>
          <NavLink className="navbar-links" to="/register">
            <p className=" d-none d-md-flex">Registro</p>
            <span className="mobile-icons d-flex d-md-none fas fa-user-plus"></span>
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-links" to="/login">
            <span className="mobile-icons fas fa-sign-in-alt"></span>
          </NavLink>
        </li>
        </>) : (
          <>
            <span className="nav__icon">Hello</span>
            <span onClick={logoutSesion} className="navbar-links-logout fas fa-sign-out-alt mx-2"></span>
          </>
        )}
      </ul>
    </div>
  );
};

export default withRouter(NavLinks);
