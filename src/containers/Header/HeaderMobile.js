import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Busket from "./components/ProductsBusket/Busket";
import mainLogo from "../../images/header/logo.svg";
import Hamburger from "./components/HamburgerIcon/Hamburger";
import SearchBar from "./components/SearchBar/SearchBar";
import Menu from "./components/PanelMenu/Menu";
import MainNav from "./components/MainNav/MainNav";
import style from "./HeaderMobile.module.css";

const HeaderMobile = () => {
  const [open, setOpen] = useState(false);
  const openHeandler = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className={style.headerMobileWraper}>
      <header className={style.headerMobile}>
        <NavLink to="/" className={style.headerLogoLink}>
          <img src={mainLogo} alt="mainLogo" className={style.headerLogo} />
        </NavLink>
        <Busket />
        <Hamburger buttonOpenHeandler={openHeandler} openBtn={open} />
      </header>
      {open && (
        <div className={style.menuWraper}>
          <Menu />
          <SearchBar />
          <MainNav />
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;
