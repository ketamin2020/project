import React, { useState, useRef } from "react";
import classnames from "classnames";
import Chevron from "../../../assets/AccordeonShevron/Chevron";
import style from "./Accordeon.module.css";

const Accordeon = ({ item }) => {
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
        <ul className={style.card__list}>
          <li className={style.card__item}>
            <p className={style.item__text}>{item.date}</p>
            <p className={classnames(style.item__text, style.visible)}>
              {item.number}
            </p>
            <p className={style.item__text}>{item.cost}₽</p>
            <p className={style.item__text}>{item.status}</p>
            <p className={classnames(style.item__text, style.visible)}>
              Посмотреть детали
            </p>
          </li>
        </ul>
        <Chevron className={setRotate} width={16} height={16} fill={"#000"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={style.card__content}
      >
        <ul className={style.list__ordered}>
          <li className={style.item__ordered}>
            <p className={style.item__heading}>Наименование:</p>
            <p className={classnames(style.item__heading, style.visible)}>
              Артикул:
            </p>
            <p className={style.item__heading}>Кол-во:</p>
            <p className={style.item__heading}>Сумма:</p>
          </li>
          {item.ordered.map(({ name, articel, how, price }, ind) => (
            <li key={ind} className={style.item__ordered}>
              <p className={style.item__text}>{name}</p>
              <p className={classnames(style.item__text, style.visible)}>
                {articel}
              </p>
              <p className={style.item__text}>{how}</p>
              <p className={style.item__text}>{price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordeon;
