import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import style from "./MainNav.module.css";
import { Context } from "../../../../context/Context";

const MainNav = () => {
  const { mainNavLink } = useContext(Context);
  return (
    <nav className={style.nav}>
      {mainNavLink.map(({ linkName }, i) => (
        <NavLink to="/" key={i} className={style.mainNavLink}>
          {linkName}
        </NavLink>
      ))}
    </nav>
  );
};

export default MainNav;
