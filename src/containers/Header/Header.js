import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./components/SearchBar/SearchBar";
import Menu from "./components/PanelMenu/Menu";
import Busket from "./components/ProductsBusket/Busket";
import MainNav from "./components/MainNav/MainNav";
import style from "./Header.module.css";
import mainLogo from "../../images/header/logo.svg";

const Header = () => {
  return (
    <div className={style.headerWrapper}>
      <header className={style.header}>
        <NavLink to="/" className={style.headerLogoLink}>
          <img src={mainLogo} alt="mainLogo" className={style.headerLogo} />
        </NavLink>
        <SearchBar />
        <div className={style.navWrapper}>
          <Menu />
          <Busket />
        </div>
      </header>
      <MainNav />
    </div>
  );
};

export default Header;
