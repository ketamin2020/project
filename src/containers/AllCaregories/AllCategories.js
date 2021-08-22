import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import style from "./AllCategories.module.css";

const AllCategories = () => {
  const { categoties } = useContext(Context);
  return (
    <section className={style.section}>
      <h2 className={style.sectionTitle}>Все категории</h2>
      {categoties.map(({ title, image }, ind) => (
        <div key={ind} className={style.categoriesCard}>
          <NavLink className={style.categoriesLink} key={ind} to="/">
            <p className={style.categoriesName}>{title}</p>
            <img
              src={image}
              alt="categories"
              className={style.categoriesImage}
            />
          </NavLink>
        </div>
      ))}

      <NavLink className={style.watchCategories} to="/">
        Смотреть все категории
      </NavLink>
    </section>
  );
};

export default AllCategories;
