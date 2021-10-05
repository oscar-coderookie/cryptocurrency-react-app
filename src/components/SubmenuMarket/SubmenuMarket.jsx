import "./SubmenuMarket.scss";
import { NavLink, withRouter } from "react-router-dom";
import React, { useState } from "react";

const SubmenuMarket = () => {
  const [isOpen, setOpen] = useState(false);

  const links = [
    { title: "Criptomonedas", to: "/market/coins" },
    { title: "Compañías", to: "/market/companies" },
    { title: "Divisas", to: "/" },
  ];

  const openSideNav = () => {
    setOpen(!isOpen);
  };
  return (
    <ul className="submenu" >
      <div className="submenu__title" onClick={() => openSideNav()}>Mercados</div>

      <div className="submenu__bar">
        {isOpen &&
          links.map((link, index) => {
            const { title, to } = link;
            return (
              <li key={index} className= "submenu__element">
                <NavLink exact to={to} className="submenu-links">
                  {title}
                </NavLink>
              </li>
            );
          })}
      </div>
    </ul>
  );
};

export default withRouter(SubmenuMarket);
