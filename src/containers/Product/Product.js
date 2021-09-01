import React from "react";
import ProductSlider from "./components/ProductImageSlider/ProductSlider";
import ColorChanger from "./components/ColorChanger/ColorChanger";
import ProductControlPanel from "./components/ProductControlPanel/ProductControlPanel";
import ShortFeature from "./components/ShortFeature/ShortFeature";
import style from "./Product.module.css";

const Product = () => {
  return (
    <section className={style.section}>
      <div className={style.sliderWraper}>
        <ProductSlider />
      </div>
      <div className={style.panelWraper}>
        <ColorChanger />
        <ProductControlPanel />
        <ShortFeature />
      </div>
    </section>
  );
};

export default Product;
