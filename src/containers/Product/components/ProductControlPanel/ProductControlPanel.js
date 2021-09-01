import React from "react";
import { NavLink } from "react-router-dom";
import style from "./ProductControlPanel.module.css";

const ProductControlPanel = () => {
  return (
    <div className={style.controlPanelContainer}>
      <div className={style.priceContentWrapper}>
        <p className={style.price}>2 500 ₽</p>
        <p className={style.oldPrice}>3 500 ₽</p>
        <p className={style.balance}>Осталось 1 шт на складе</p>
      </div>
      <div className={style.controlButtonWrapper}>
        <button className={style.addButton}> В корзину</button>
        <NavLink to="/" className={style.linkCompare}>
          Сравнить
        </NavLink>
        <NavLink to="/" className={style.linkFavorites}>
          В избранное
        </NavLink>
      </div>
    </div>
  );
};

export default ProductControlPanel;
