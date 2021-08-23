import React, { useContext } from "react";
import { Context } from "../../context/Context";
import ProductCard from "../../common/ProductCards/ProductCard";
import ProductsSlider from "../../common/ProductsSlider/ProductsSlider";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import style from "./PopularItems.module.css";

const PopularItems = () => {
  const { cards } = useContext(Context);
  return (
    <section className={style.section}>
      <div className={style.sectionHeader}>
        <SectionTitle text="Новинки" textSize="40px" textWeight="500" />
        <div className={style.changeItems}>
          <p className={style.changeNewItem}>Новинки</p>
          <p className={style.changePopularItem}>Популярные товары</p>
        </div>
      </div>
      <ProductsSlider>
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
      </ProductsSlider>
    </section>
  );
};

export default PopularItems;
