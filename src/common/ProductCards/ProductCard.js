import React from "react";
import CompareChevron from "./ProductCardChevron/CompareChevron";
import HeartChevron from "./ProductCardChevron/HeartChevron";
import ShopingBusketChevron from "./ProductCardChevron/ShopingBusketChevron";
import style from "./ProductCard.module.css";

const ProductCard = ({ image, title, subTitle, oldPrice, price }) => {
  return (
    <div className={style.productCard}>
      <img src={image} alt="product" className={style.cardImage} />
      <h3 className={style.productName}> {title}</h3>
      <p className={style.productDescription}>{subTitle}</p>
      <div className={style.productPrice}>
        <span className={style.productOldPrice}>{oldPrice}</span>
        <span className={style.productNewPrice}>{price}</span>
      </div>
      <div className={style.productPanel}>
        <CompareChevron width="20" height="20" classN={style.compareChevron} />
        <HeartChevron width="20" height="20" classN={style.heartChevron} />
        <ShopingBusketChevron
          width="20"
          height="20"
          classN={style.busketChevron}
        />
      </div>
    </div>
  );
};

export default ProductCard;
