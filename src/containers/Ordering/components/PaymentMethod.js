import React, { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import classnames from "classnames";
import style from "./PaymentMethod.module.css";
import Accordeon from "./Accordeon";
import Steper from "./Steper";

const PaymentMethod = () => {
  const { paymentMethod } = useContext(Context);
  const [active, setActive] = useState(null);
  return (
    <Accordeon title={"Способ оплаты"}>
      <div className={style.container}>
        <ul className={style.listItems}>
          {paymentMethod.map(({ name, method }, ind) => (
            <li
              onClick={() => setActive(ind)}
              key={ind}
              className={classnames(
                style.item,
                active === ind && style.itemActive
              )}
            >
              <p className={style.itemName}>{name}</p>
              <p className={style.price}>{method}</p>
            </li>
          ))}
        </ul>
        <Steper />
      </div>
    </Accordeon>
  );
};

export default PaymentMethod;
