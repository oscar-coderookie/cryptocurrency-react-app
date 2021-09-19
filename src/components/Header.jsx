import React, { useState } from "react";
import { Twirl as Hamburger } from 'hamburger-react'
import "./Header.css";
import logo from "../img/logo2.png";
import NavLinks from "./NavLinks";

const Header = ({onLogout, hasUser}) => {

  const [open, setOpen] = useState(false);

  return (
    <div className="header-block">
      <div className="header">
        <img src={logo} alt="logo" className="header-logo" />
        <div className="header-menu">
          <Hamburger 
        toggled={open} 
        toggle={setOpen} 
        onClick={() => setOpen(!open)}
        color="#fff"
        />
        </div>
        
      </div>
       <NavLinks show={open} onLogout={onLogout} hasUser={hasUser}/>
    </div>
  );
};

export default Header;
