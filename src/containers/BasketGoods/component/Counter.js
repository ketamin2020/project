import React from "react";
import style from "./Counter.module.css";

const Counter = ({ count }) => {
  return (
    <div className={style.counterWrapper}>
      <div className={style.minusWraper}>
        <span className={style.minus}></span>
      </div>
      <p className={style.productCount}>{count}</p>
      <div className={style.plusWraper}>
        <span className={style.plusHor}> </span>
        <span className={style.plusVer}> </span>
      </div>
    </div>
  );
};

export default Counter;
