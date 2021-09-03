import React, { useContext, useState } from "react";
import { Context } from "../../../context/Context";
import classnames from "classnames";
import style from "./DeliveryMethod.module.css";
import Accordeon from "./Accordeon";
import Steper from "./Steper";

const DeliveryMethod = () => {
  const { deliveryMethod } = useContext(Context);
  const [active, setActive] = useState(null);

  return (
    <Accordeon title={"Способ доставки"}>
      <div className={style.container}>
        <ul className={style.listItems}>
          {deliveryMethod.map(({ name, price }, ind) => (
            <li
              onClick={() => setActive(ind)}
              key={ind}
              className={classnames(
                style.item,
                active === ind && style.itemActive
              )}
            >
              <p className={style.itemName}>{name}</p>
              <p className={style.price}>{price}</p>
            </li>
          ))}
        </ul>
        <Steper />
      </div>
    </Accordeon>
  );
};

export default DeliveryMethod;
