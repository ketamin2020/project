import React, { useContext, useState, useEffect, useRef } from "react";
import { Context } from "../../../../context/Context";
import Slider from "react-slick";
import style from "./ProductSlider.module.css";

const ProductSlider = () => {
  const { productImage } = useContext(Context);
  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();
  const NextArrow = ({ classN, onClick }) => (
    <div className={classN} onClick={onClick} />
  );
  const PrevArrow = ({ classN, onClick }) => (
    <div className={classN} onClick={onClick} />
  );
  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, []);
  return (
    <div className={style.sliderContainer}>
      <ul className={style.sliderImagesList}>
        <Slider
          asNavFor={state.nav2}
          slidesToShow={1}
          infinite={true}
          ref={(slider) => (slider1.current = slider)}
        >
          {productImage.map(({ image }, ind) => (
            <li key={ind} className={style.sliderImageItem}>
              <img
                src={image}
                alt="productImage"
                className={style.sliderImage}
              />
            </li>
          ))}
        </Slider>
      </ul>
      <ul className={style.sliderImagesListMini}>
        <div className={style.lightLeft}></div>
        <div className={style.lightRight}></div>
        <Slider
          asNavFor={state.nav1}
          ref={(slider) => (slider2.current = slider)}
          slidesToShow={2.3}
          focusOnSelect={true}
          arrows={true}
          infinite={true}
          centerMode={true}
          prevArrow={<PrevArrow classN={style.prevArrow} />}
          nextArrow={<NextArrow classN={style.nextArrow} />}
        >
          {productImage.map(({ image }, ind) => (
            <li key={ind} className={style.sliderImageItemMini}>
              <img
                src={image}
                alt="productImage"
                className={style.sliderImageMini}
              />
            </li>
          ))}
        </Slider>
      </ul>
    </div>
  );
};

export default ProductSlider;
