import React from "react";
import style from "./Busket.module.css";
import busket from "../../../../images/header/basket.svg";

const Busket = () => {
  return (
    <div className={style.busketWraper}>
      <img src={busket} alt="busket" className={style.busketImage} />
      <p className={style.busketPrice}>6 000</p>
    </div>
  );
};

export default Busket;
