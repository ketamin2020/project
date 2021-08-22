import React from "react";
import style from "./SectionTitle.module.css";

const SectionTitle = ({ text, textWeight, textSize }) => {
  return (
    <h2
      style={{ fontWeight: textWeight, fontSize: textSize }}
      className={style.title}
    >
      {text}
    </h2>
  );
};

export default SectionTitle;
