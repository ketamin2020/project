import React, { useContext } from "react";
import { Context } from "../../context/Context";
import ProductSlider from "./components/ProductImageSlider/ProductSlider";
import ColorChanger from "./components/ColorChanger/ColorChanger";
import ProductControlPanel from "./components/ProductControlPanel/ProductControlPanel";
import ShortFeature from "./components/ShortFeature/ShortFeature";
import ProductFullDescription from "./components/ProductFullDesсription/ProductFullDescription";
import ProductsSlider from "../../common/ProductsSlider/ProductsSlider";
import ProductCard from "../../common/ProductCards/ProductCard";
import style from "./Product.module.css";

const Product = () => {
  const { cards } = useContext(Context);
  return (
    <>
      <section className={style.section}>
        <div className={style.sliderWraper}>
          <ProductSlider />
        </div>
        <div className={style.panelWraper}>
          <ColorChanger />
          <ProductControlPanel />
          <ShortFeature />
        </div>
        <ProductFullDescription />
      </section>
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
    </>
  );
};

export default Product;
