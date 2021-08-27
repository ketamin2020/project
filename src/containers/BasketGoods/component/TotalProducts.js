import React from "react";
import style from "./TotalProducts.module.css";

const TotalProducts = () => {
  return (
    <div className={style.totalWraper}>
      <p className={style.totalTitle}>Итого:</p>
      <p className={style.totalProducts}>Товаров: 4</p>
      <p className={style.priceText}>
        Стоимость заказа без учета стоимости доставки:
      </p>
      <p className={style.priceValue}>7 345 ₽</p>
      <p className={style.promocode}>Применить промокод</p>
      <button className={style.buttonSubmit}>Оформить заказ</button>
    </div>
  );
};

export default TotalProducts;
