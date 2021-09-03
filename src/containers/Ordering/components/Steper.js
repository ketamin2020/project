import React from "react";
import style from "./Steper.module.css";

const Steper = () => {
  return (
    <div className={style.buttonContainer}>
      <button className={style.buttonPrev}>Назад</button>
      <button className={style.buttonNext}>Далее</button>
    </div>
  );
};

export default Steper;
