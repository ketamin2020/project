import React, { useContext } from "react";
import { Context } from "../../context/Context";
import ProductCard from "../../common/ProductCards/ProductCard";
import style from "./PopularItems.module.css";

const PopularItems = () => {
  const { cards } = useContext(Context);
  return (
    <section className={style.section}>
      {cards.map(({ image, title, subTitle, oldPrice, price }, ind) => (
        <ProductCard
          key={ind}
          image={image}
          title={title}
          subTitle={subTitle}
          oldPrice={oldPrice}
          price={price}
        />
      ))}
    </section>
  );
};

export default PopularItems;
