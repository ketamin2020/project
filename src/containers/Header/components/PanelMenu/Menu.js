import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Menu.module.css";
import compare from "../../../../images/header/compare.svg";
import heart from "../../../../images/header/heart.svg";
import user from "../../../../images/header/user.svg";

const Menu = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.navlistItems}>
        <li className={style.navItem}>
          <NavLink className={style.navItemLink} to="/">
            <img src={compare} alt="compare" className={style.navItemImage} />
            Сравнение
          </NavLink>
        </li>
        <li className={style.navItem}>
          <NavLink className={style.navItemLink} to="/">
            <img src={heart} alt="compare" className={style.navItemImage} />
            Избранное
          </NavLink>
        </li>
        <li className={style.navItem}>
          <NavLink className={style.navItemLink} to="/">
            <img src={user} alt="compare" className={style.navItemImage} />
            Войти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
