import React from "react";
import classnames from "classnames";
import style from "./Hamburger.module.css";

const Hamburger = ({ buttonOpenHeandler, openBtn }) => {
  return (
    <div onClick={buttonOpenHeandler}>
      <div
        id={style.hamburgerIcon}
        className={classnames(
          style.openCloseBtn,
          openBtn ? style.hamburgerOpen : ""
        )}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Hamburger;
