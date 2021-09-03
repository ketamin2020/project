import React, { useContext } from "react";
import { Context } from "../../../context/Context";
import style from "./OrderingList.module.css";

const OrderingList = () => {
  const { orderingList } = useContext(Context);
  return (
    <div className={style.container}>
      <h2 className={style.listTitle}>Ваш заказ:</h2>
      <ul className={style.listItems}>
        {orderingList.map(({ image, articul, name, price }, ind) => (
          <li key={ind} className={style.item}>
            <img src={image} alt="orderImage" className={style.itemImage} />
            <div className={style.itemContentWraper}>
              <p className={style.itemArticul}>{articul}</p>
              <p className={style.itemName}>{name}</p>
              <p className={style.itemPrice}>{price}</p>
            </div>
          </li>
        ))}
      </ul>
      <ul className={style.payListItems}>
        <li className={style.payItem}>
          <p className={style.discount}>Скидка по промокоду:</p>
          <p className={style.discountValue}>{"1 345 ₽"}</p>
        </li>
        <li className={style.payItem}>
          <p className={style.toPay}>Итого к оплате:</p>
          <p className={style.toPayValue}>{"7 345 ₽"}</p>
        </li>
      </ul>
    </div>
  );
};

export default OrderingList;
