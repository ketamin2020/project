import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import ProductCard from "../../common/ProductCards/ProductCard";
import Slider from "react-slick";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import style from "./PopularItems.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularItems = () => {
  const [indexSlide, setIndexSlide] = useState(0);
  const { cards } = useContext(Context);
  const NextArrow = ({ classN, onClick }) => (
    <div className={classN} onClick={onClick} />
  );
  const PrevArrow = ({ classN, onClick }) => (
    <div className={classN} onClick={onClick} />
  );
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoPlay: true,
    dotsClass: style.sliderDots,
    prevArrow: <PrevArrow classN={style.prevArrow} />,
    nextArrow: <NextArrow classN={style.nextArrow} />,
    beforeChange: (prev, next) => setIndexSlide(next),
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (index) => (
      <button
        style={index === indexSlide ? { backgroundColor: " #E7430B" } : null}
      ></button>
    ),
  };
  return (
    <section className={style.section}>
      <div className={style.sectionHeader}>
        <SectionTitle text="Новинки" textSize="40px" textWeight="500" />
        <div className={style.changeItems}>
          <p className={style.changeNewItem}>Новинки</p>
          <p className={style.changePopularItem}>Популярные товары</p>
        </div>
      </div>
      {cards.length && (
        <Slider {...settings}>
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
        </Slider>
      )}
    </section>
  );
};

export default PopularItems;
