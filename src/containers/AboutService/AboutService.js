import React, { useContext } from "react";
import { Context } from "../../context/Context";
import style from "./AboutService.module.css";

const AboutService = () => {
  const { outService } = useContext(Context);

  return (
    <section className={style.section}>
      <h2 className={style.sectionTitle}>
        Как мы сохраняем высокий уровень сервиса?
      </h2>
      {outService.map(({ image, title, text }, ind) => (
        <div key={ind} className={style.serviceCard}>
          <div className={style.headCardWraper}>
            <img src={image} alt="service" className={style.cardImage} />
            <h3 className={style.cardTitle}>{title}</h3>
          </div>
          <p className={style.cardText}>{text}</p>
        </div>
      ))}
    </section>
  );
};

export default AboutService;
