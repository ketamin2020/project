import React, { useState, useContext } from "react";
import { Context } from "../../context/Context";
import Slider from "react-slick";
import style from "./Slider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderMain = () => {
  const { sliderDesk } = useContext(Context);
  const [indexSlide, setIndexSlide] = useState(0);
  const NextArrow = ({ classN, onClick }) => (
    <div className={classN} onClick={onClick} />
  );
  const PrevArrow = ({ classN, onClick }) => (
    <div className={classN} onClick={onClick} />
  );

  const settings = {
    dots: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: style.sliderDots,
    prevArrow: <PrevArrow classN={style.prevArrow} />,
    nextArrow: <NextArrow classN={style.nextArrow} />,
    beforeChange: (prev, next) => setIndexSlide(next),
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (index) => (
      <button
        style={
          index === indexSlide ? { borderBottom: "4px solid white" } : null
        }
      ></button>
    ),
  };
  return (
    <section className={style.section}>
      <Slider {...settings}>
        {sliderDesk.length &&
          sliderDesk.map(({ images, title, subTitle }, ind) => (
            <div key={ind} className={style.sliderContainer}>
              <img
                src={images}
                className={style.sliderImg}
                alt="sliderImages"
              />
              <div className={style.sliderContent}>
                <p className={style.contentTitle}>{title}</p>
                <p className={style.contentSubtitle}>{subTitle}</p>
              </div>
            </div>
          ))}
      </Slider>
    </section>
  );
};

export default SliderMain;
