import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import classnames from "classnames";
import style from "./ShopAdressCard.module.css";

const ShopAdressCard = (props) => {
  const { metroName, address, phone, workTime, metroColorBranch, howGoinTo } =
    props;
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
      <div className={style.card__infoSection}>
        <p className={style.card__address}>{address}</p>
        <div className={style.card__contactInfo}>
          <a className={style.card__phone} href={`tel+${phone}`}>
            {phone}
          </a>
          <p className={style.card__timeWork}>{workTime}</p>
        </div>
      </div>
      <button
        className={classnames(style.card, setActive)}
        onClick={toggleAccordion}
      >
        <p className={style.card__title}>
          {" "}
          <span
            className={style.card__metroColor}
            style={{ backgroundColor: metroColorBranch }}
          ></span>{" "}
          {metroName}
        </p>
        <p className={style.card__moreInfo}>Как пройти</p>
        <Chevron className={setRotate} width={16} height={16} fill={"#000"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={style.card__content}
      >
        {howGoinTo}
      </div>
    </div>
  );
};

export default ShopAdressCard;
