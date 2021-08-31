import React, { useContext } from "react";
import { Context } from "../../context/Context";
import ProductSlider from "./components/ProductSlider";
import style from "./Product.module.css";

const Product = () => {
  const { productImage } = useContext(Context);
  return (
    <section className={style.section}>
      <ProductSlider />
    </section>
  );
};

export default Product;
