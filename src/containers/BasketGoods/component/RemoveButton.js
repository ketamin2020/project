import React from "react";
import style from "./RemoveButton.module.css";

const RemoveButton = () => {
  return (
    <div className={style.deleteProductWraper}>
      <span className={style.lineHor}></span>
      <span className={style.lineVer}></span>
    </div>
  );
};

export default RemoveButton;
