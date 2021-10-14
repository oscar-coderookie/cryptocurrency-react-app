import "./Footer.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import coinGecko from "../../img/coingecko.svg";

const Footer = () => {
  return (
    <footer className="footer-block ">
      <div className="container-xl h-100">
        <div className="row h-100 ">
          <div className="col-10 col-md-6 mx-auto my-4 ">
            <ul>
              <li>
                <p href="">Política de privacidad</p>
              </li>
              <span></span>
              <li>
                <p href="">Política de cookies</p>
              </li>
              <span></span>
              <li>
                <p href="">Información legal y financiera</p>
              </li>
              <span></span>
              <li>
                <p href="">Partners oficiales</p>
              </li>
            </ul>
          </div>
          <div className="footer-block__info col-12 col-md-6 my-2">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <span></span>
              <li>
                <NavLink to="/contact">Contacto</NavLink>
              </li>
              <span></span>
              <li>
                <NavLink to="/register">Registro</NavLink>
              </li>
              <span></span>
              <li>
                <NavLink to="/market">Mercado</NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-block__copyright">
            <div className="d-flex align-items-center justify-content-center py-2 flex-wrap">
            <p className="px-2">Powered by:</p>
              <img className="footer-block__copyright-img" src={coinGecko} alt={coinGecko} />
              
            </div>

            <p>All rights reserved - Cryptune 2021</p>
            <p>Oscar Serna Developer</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
