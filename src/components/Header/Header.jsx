import React, { useState } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import "./Header.scss";
import logo from "../../img/logo2.png";
import NavLinks from "../NavLinks/NavLinks";


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header-block">
      <div className="header">
        <img src={logo} alt="logo" className="header-logo" />
        <div className="header-right-container"></div>
        <div className="header-menu">
          <Hamburger  toggled={open} toggle={setOpen} onClick={() => setOpen(!open)} color="#437A16" />
        </div>
      </div>
      <NavLinks show={open} />
    </div>
  );
};

export default Header;
