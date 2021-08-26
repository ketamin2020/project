import React from "react";
import style from "./BusketItem.module.css";

const BusketItem = ({ props }) => {
  console.log("render", props);
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
          <div className={style.priceWrapper}>
            <span className={style.productOldPrice}>{oldPrice}₽</span>
            <span className={style.productPrice}>{price}₽</span>
            <span className={style.productTotal}>X2₽</span>
          </div>
          <div className={style.deleteProductWraper}>
            <span className={style.lineHor}></span>
            <span className={style.lineVer}></span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BusketItem;
