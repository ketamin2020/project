import React, { useContext } from "react";
import { Context } from "../../../../context/Context";
import style from "./ShortFeature.module.css";

const ShortFeature = () => {
  const { productsShortFeature } = useContext(Context);
  return (
    <div className={style.container}>
      <ul className={style.featureListItems}>
        {productsShortFeature.map(({ key, value }, ind) => (
          <li key={ind} className={style.featureItem}>
            <p className={style.featureKey}>{key}</p>
            <p className={style.featureValue}>{value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShortFeature;
