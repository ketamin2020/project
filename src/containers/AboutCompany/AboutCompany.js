import React, { useContext } from "react";
import { Context } from "../../context/Context";
import style from "./AboutCompany.module.css";

const AboutCompany = () => {
  const { aboutCompany } = useContext(Context);
  const {
    bg_desktop,
    bg_mob,
    images,
    phones,
    title,
    text,
    subTitle,
    text1,
    subTitle1,
    text2,
    cards,
  } = aboutCompany;
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.imageBackgroundWrapper}>
          <img
            src={bg_mob}
            alt="imageBg_mob"
            className={style.backgroundImageMobile}
          />
          <img
            src={bg_desktop}
            alt="imageBg_desktop"
            className={style.backgroudImageDesktop}
          />
        </div>
        <div className={style.contentWrapper}>
          <div className={style.textWrapper}>
            <h1 className={style.sectionTitle}>{title}</h1>
            <p className={style.sectionText}>{text}</p>
            <p className={style.sectionSubtitle}>{subTitle}</p>
            <p className={style.sectionText}>{text1}</p>
            <p className={style.sectionSubtitle}>{subTitle1}</p>
            <p className={style.sectionText}>{text2}</p>
          </div>
          <aside className={style.aside}>
            {images.map(({ image }, i) => (
              <img
                src={image}
                alt="imageCompany"
                className={style.asideImage}
              />
            ))}
          </aside>
        </div>
      </div>
      <div className={style.infoAboutWorkWraper}>
        <img src={phones} alt="phones" className={style.phonesIamge} />
      </div>
      <ul className={style.infoAboutCardsList}>
        {cards.map(({ text }, i) => (
          <li key={i} className={style.infoAboutCard}>
            <p className={style.infoAboutCardText}>{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AboutCompany;
