import React, { useContext } from "react";
import { Context } from "../../context/Context";
import BusketItem from "./component/BusketItem";
import style from "./BasketGoods.module.css";

const BasketGoods = () => {
  const { busketGoods } = useContext(Context);
  return (
    <section className={style.section}>
      <BusketItem props={busketGoods} />
    </section>
  );
};

export default BasketGoods;
