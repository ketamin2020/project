import React, { useContext } from "react";
import { Context } from "../../context/Context";
import style from "./ServiceCenter.module.css";

const ServiceCenter = () => {
  const { serviceCenter } = useContext(Context);
  const { title, subTitle, about, cards, bannerText } = serviceCenter;
  return (
    <section className={style.section}>
      <div className={style.imageWrapper}>
        <div className={style.image}></div>
        <div className={style.content}>
          <h2 className={style.contentTitle}>{title}</h2>
          <p className={style.contentSubTitle}>{subTitle}</p>
        </div>
      </div>
    </section>
  );
};

export default ServiceCenter;
