import React from "react";
import style from "./DescriptionList.module.css";

const DescriptionList = ({ list }) => {
  return (
    <ul className={style.listItems}>
      <h2 className={style.title}>Характеристики</h2>
      {list.map(({ key, value }, ind) => (
        <li key={ind} className={style.item}>
          <p className={style.itemKey}>{key}</p>
          <p className={style.itemValue}>{value}</p>
        </li>
      ))}
    </ul>
  );
};

export default DescriptionList;
