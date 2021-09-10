import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import Accordeon from "./Accordeon";
import style from "./HistoryList.module.css";

const HistoryList = () => {
  const { history } = useContext(Context);

  return (
    <div className={style.wrapper}>
      <div className={style.card__heading}>
        <p className={style.card__heading_item}>Дата</p>
        <p className={style.card__heading_item}>№ заказа</p>
        <p className={style.card__heading_item}>Сумма</p>
        <p className={style.card__heading_item}>Статус</p>
      </div>
      {history.map((item, i) => (
        <Accordeon key={i} item={item} />
      ))}
    </div>
  );
};

export default HistoryList;
