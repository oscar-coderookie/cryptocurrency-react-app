import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import "./Header.scss";
import logo from "../../img/logo2.png";
import NavLinks from "../NavLinks/NavLinks";
import UserMenu from '../UserMenu/UserMenu';


const Header = ({ onLogout, hasUser, user }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-block">
      <div className="header">
        <img src={logo} alt="logo" className="header-logo" />
        <div className="header-right-container"></div>
        <div className="header-menu">
          {hasUser ? <UserMenu hasUser={hasUser} user={user}/> :  null }
          <Hamburger toggled={open} toggle={setOpen} onClick={() => setOpen(!open)} color="#fff" />
        </div>
      </div>
      <NavLinks show={open} onLogout={onLogout} hasUser={hasUser} />
    </div>
  );
};

export default Header;
