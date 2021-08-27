import React, { useContext } from "react";
import { Context } from "../../context/Context";
import BusketItem from "./component/BusketItem";
import TotalProducts from "./component/TotalProducts";
import style from "./BasketGoods.module.css";

const BasketGoods = () => {
  const { busketGoods } = useContext(Context);
  return (
    <section className={style.section}>
      <h1 className={style.sectionTitle}>Корзина</h1>
      <BusketItem props={busketGoods} />
      <TotalProducts />
    </section>
  );
};

export default BasketGoods;
