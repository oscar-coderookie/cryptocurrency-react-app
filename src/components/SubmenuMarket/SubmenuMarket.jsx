import "./SubmenuMarket.scss";
import { NavLink, withRouter } from "react-router-dom";
import React, { useState } from "react";

const SubmenuMarket = ({openMenu}) => {
  const [isOpen, setOpen] = useState(false);

  const links = [
    { title: "Tokens", to: "/market/coins", className: "mobile-icons d-flex d-md-none fab fa-bitcoin" },
    { title: "Compañías", to: "/market/companies" , className: "mobile-icons d-flex d-md-none fas fa-exchange-alt" },
    { title: "Global", to: "/market/global" , className: "mobile-icons d-flex d-md-none fas fa-globe" },
  ];

  const openSideNav = () => {
    setOpen(!isOpen);
  };
  return (
    <ul className="submenu" >
      <div className="submenu__title" onClick={() => openSideNav()}>
      <p className="d-none d-md-flex">Mercados</p>
      <span className="mobile-icons d-flex d-md-none fas fa-search-dollar"></span>
      
      </div>

      <ul className="submenu__bar">
        {isOpen &&
          links.map((link, index) => {
            const { title, to , className} = link;
            return (
              <li key={index} className= "submenu__element">
                <NavLink exact to={to} className="submenu-links" onClick={openMenu}>
                  <p className="d-none d-md-flex">{title}</p>
                  <span className={className}></span>
                  
                </NavLink>
              </li>
            );
          })}
      </ul>
    </ul>
  );
};

export default withRouter(SubmenuMarket);
