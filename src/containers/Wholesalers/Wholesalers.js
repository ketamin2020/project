import React, { useContext } from "react";
import { Context } from "../../context/Context";
import style from "./Wholesalers.module.css";

const Wholesalers = () => {
  const { whoolsalers } = useContext(Context);
  const {
    salares_mob,
    salares_desktop,
    bgTitle,
    whatWeDo,
    whatWeDoText,
    variantTitle,
    variant,
    variantCards,
  } = whoolsalers;
  return (
    <section className={style.section}>
      <div className={style.imageWraper}>
        <img
          src={salares_mob}
          alt="salaresBg"
          className={style.salaresBg_mob}
        />
        <img
          src={salares_desktop}
          alt="salaresBg"
          className={style.salaresBg_desktop}
        />
        <h1 className={style.sectionMainTitle}>{bgTitle}</h1>
      </div>
      <p className={style.sectionTitle}>{whatWeDo}</p>
      <p className={style.sectionText}>{whatWeDoText}</p>
      <p className={style.sectionTextSubtitle}>С Доставкой по России и СНГ</p>
      <div className={style.variantWraper}>
        <h2 className={style.variantTitle}>{variantTitle}</h2>
        <ul className={style.variantListItems}>
          {variant.map(({ title, subTitle }, ind) => (
            <li key={ind} className={style.variantItem}>
              <p className={style.variantItemTitle}>{title}</p>
              <p className={style.variantItemText}>{subTitle}</p>
            </li>
          ))}
        </ul>
        <ul className={style.variantCardsListItem}>
          {variantCards.map(({ text }, ind) => (
            <li className={style.variantCardsItem}>
              <p className={style.variantCardsText}>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Wholesalers;
