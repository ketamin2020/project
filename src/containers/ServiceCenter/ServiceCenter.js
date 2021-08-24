import React, { useContext } from "react";
import { Context } from "../../context/Context";
import style from "./ServiceCenter.module.css";

const ServiceCenter = () => {
  const { serviceCenter, navBarPhone } = useContext(Context);
  const { title, subTitle, about, cards, bannerText, serviceMapIcon } =
    serviceCenter;
  return (
    <section className={style.section}>
      <div className={style.imageWrapper}>
        <div className={style.image}></div>
        <div className={style.content}>
          <h2 className={style.contentTitle}>{title}</h2>
          <p className={style.contentSubTitle}>{subTitle}</p>
        </div>
      </div>

      <div className={style.contentWrapper}>
        <h2 className={style.about}>{about}</h2>
        <div className={style.adresesWraper}>
          <span className={style.adresesTitle}>Адреса точек</span>
          <img src={serviceMapIcon} alt="map" className={style.mapImage} />
        </div>
        <p className={style.textAbout}>Ремонт телефонов и ноутбуков</p>
        <ul className={style.cardListItems}>
          {cards.map(({ image, title, text }, ind) => (
            <li key={ind} className={style.item}>
              <img src={image} alt="cardIcon" className={style.cardImage} />
              <p className={style.cardTitle}>{title}</p>
              <p className={style.cardText}>{text} </p>
            </li>
          ))}
        </ul>
        <div className={style.bannerWrapper}>
          <p className={style.bannerText}>{bannerText}</p>
          <div className={style.bannerImage}></div>
          <button className={style.bannerButtom}>Оставить заявку</button>
          <a className={style.phoneLink} href={`tel:+${navBarPhone}`}>
            {navBarPhone}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceCenter;
