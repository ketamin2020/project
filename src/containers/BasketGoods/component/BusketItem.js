import React from "react";
import Counter from "./Counter";
import RemoveButton from "./RemoveButton";
import style from "./BusketItem.module.css";

const BusketItem = ({ props }) => {
  return (
    <ul className={style.productsList}>
      {/* <li className={style.productHeading}>
        <p className={style.item}>Товар</p>
        <p className={style.item}>Артикул</p>
        <p className={style.item}>Наименование</p>
        <p className={style.item}>Количество</p>
        <p className={style.item}>Цена</p>
      </li> */}

      {props.map(({ image, article, name, count, price, oldPrice }, ind) => (
        <li key={ind} className={style.productItem}>
          <img src={image} alt="product" className={style.productImage} />
          <p className={style.productArticle}>{article}</p>
          <p className={style.productName}>{name}</p>
          <Counter count={count} />
          <div className={style.priceWrapper}>
            <span className={style.productOldPrice}>{oldPrice}</span>
            <span className={style.productPrice}>{price}</span>
            <span className={style.productTotal}>X2₽</span>
          </div>
          <RemoveButton />
        </li>
      ))}
    </ul>
  );
};

export default BusketItem;
