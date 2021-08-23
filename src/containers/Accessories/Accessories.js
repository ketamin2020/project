import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { NavLink } from "react-router-dom";
import style from "./Accessories.module.css";

const Accessories = () => {
  const { accessories } = useContext(Context);

  return (
    <section className={style.section}>
      <h2 className={style.sectionTitle}>Аксессуары</h2>
      <ul className={style.listItems}>
        {accessories.map(({ image, subTitle, title }, ind) => (
          <li className={style.item} key={ind}>
            <img src={image} alt="accessories" className={style.itemImage} />
            <p className={style.title}>{title}</p>
            {subTitle.map(({ item }, i) => (
              <NavLink className={style.itemLink} key={i} to="/">
                {item}
              </NavLink>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Accessories;
