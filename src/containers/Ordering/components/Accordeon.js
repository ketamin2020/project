import React, { useState, useRef } from "react";
import classnames from "classnames";
import Chevron from "../../../assets/AccordeonShevron/Chevron";
import style from "./Accordeon.module.css";

const Accordeon = ({ title, children }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState(style.card__icon);
  const content = useRef(null);
  const toggleAccordion = () => {
    setActiveState(setActive === "" ? style.active : "");
    setHeightState(
      setActive === style.active ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === style.active
        ? style.card__icon
        : classnames(style.card__icon, style.rotate)
    );
  };
  return (
    <div className={style.card__section}>
      <button
        className={classnames(style.card, setActive)}
        onClick={toggleAccordion}
      >
        <p className={style.card__title}>{title}</p>
        <Chevron className={setRotate} width={16} height={16} fill={"#000"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={style.card__content}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordeon;
