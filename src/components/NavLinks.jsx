import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import './NavLinks.css';

const NavLinks = ({show}) => {
  return (
    <div className={show ? 'navbar active' : 'navbar'}>
      <ul className="navbar-list">
        <li>
          <NavLink className="navbar-links" to="/">Home</NavLink>

        </li>
        <li>
        
          <NavLink className="navbar-links" to="/market">Market</NavLink>
        </li>
        <li>
          <NavLink className="navbar-links" to="/">Contact</NavLink>
  
        </li>
        <li>
          <NavLink className="navbar-links" to="/">Register</NavLink>
       
        </li>
      </ul>
    </div>
  );
};

export default withRouter (NavLinks);
