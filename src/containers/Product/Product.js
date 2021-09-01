import React from "react";
import ProductSlider from "./components/ProductImageSlider/ProductSlider";
import ColorChanger from "./components/ColorChanger/ColorChanger";
import ProductControlPanel from "./components/ProductControlPanel/ProductControlPanel";
import style from "./Product.module.css";

const Product = () => {
  return (
    <section className={style.section}>
      <ProductSlider />
      <ColorChanger />
      <ProductControlPanel />
    </section>
  );
};

export default Product;
