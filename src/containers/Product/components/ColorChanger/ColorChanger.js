import React, { useState, useContext } from "react";
import { Context } from "../../../../context/Context";
import classnames from "classnames";
import style from "./ColorChanger.module.css";

const ColorChanger = () => {
  const { colors } = useContext(Context);
  const [active, setActive] = useState(0);

  return (
    <div className={style.inputsContainer}>
      <p className={style.colorChangerTitle}>Цвет:</p>
      {colors.map(({ color }, ind) => (
        <div className={style.colorPickerWraper} key={ind}>
          <div
            onClick={() => setActive(ind)}
            style={{ background: color }}
            className={classnames(
              style.colorPicker,
              active === ind ? style.active : ""
            )}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default ColorChanger;
