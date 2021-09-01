import React from "react";
import ProductSlider from "./components/ProductImageSlider/ProductSlider";
import ColorChanger from "./components/ColorChanger/ColorChanger";
import style from "./Product.module.css";

const Product = () => {
  return (
    <section className={style.section}>
      <ProductSlider />
      <ColorChanger />
    </section>
  );
};

export default Product;
