import React, { useContext } from "react";
import { Context } from "../../context/Context";
import style from "./ShopsAdressess.module.css";
import ShopAdressCard from "./components/ShopAdressCard";

const ShopsAdressess = () => {
  const { shopsAddresess } = useContext(Context);
  return (
    <section className={style.section}>
      <h1 className={style.sectionTitle}>Контакты</h1>
      <ul className={style.cardListItems}>
        {shopsAddresess.map((shop, ind) => (
          <li key={ind} className={style.cardItem}>
            <ShopAdressCard {...shop} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShopsAdressess;
