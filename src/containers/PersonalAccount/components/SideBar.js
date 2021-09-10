import React from "react";
import { NavLink } from "react-router-dom";
import style from "./SideBar.module.css";

const SideBar = () => {
  const selected = {
    color: "black",
    fontWeight: "bold",
    fontSize: "18px",
  };
  return (
    <aside className={style.aside}>
      <ul className={style.asideListItems}>
        <li className={style.asideItem}>
          <NavLink activeStyle={selected} className={style.historyLink} to="/">
            История заказов
          </NavLink>
        </li>
        <li className={style.asideItem}>
          <NavLink activeStyle={selected} className={style.selectedLink} to="/">
            Избранное
          </NavLink>
        </li>
        <li className={style.asideItem}>
          <NavLink activeStyle={selected} className={style.profileLink} to="/">
            Данные профиля
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
