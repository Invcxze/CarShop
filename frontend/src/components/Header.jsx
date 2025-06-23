import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-bg">
      <div className="wrap">
        <div className="header">
          <div className="logo">
            <NavLink to="/">
              <img src="/images/logo.png" alt="logo" title="logo" />
            </NavLink>
          </div>
          <div className="hdr-nav">
            <ul className="nav">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                  Главная
                </NavLink>
              </li>

              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active hsubs" : "hsubs"}>
                  О нас
                </NavLink>
                <ul className="subs">
                  <li><NavLink to="/contacts">Контакты</NavLink></li>
                  <li><NavLink to="/about">Прес-центр</NavLink></li>
                </ul>
              </li>

              <li>
                <NavLink to="/service" className={({ isActive }) => isActive ? "active" : ""}>
                  Услуги
                </NavLink>
              </li>
              <li>
                <NavLink to="/cars" className={({ isActive }) => isActive ? "active" : ""}>
                  Машины
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts" className={({ isActive }) => isActive ? "active" : ""}>
                  Контакты
                </NavLink>
              </li>

              <div id="lavalamp"></div>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    </div>
  );
}