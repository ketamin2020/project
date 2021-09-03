import React, { useState } from "react";
import Steper from "./Steper";
import Input from "../../../common/Input/Input";
import style from "./DeliveryRegion.module.css";
import Accordeon from "./Accordeon";

const DeliveryRegion = () => {
  const [city, setCity] = useState("");
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };
  return (
    <Accordeon title={"Регион доставки"}>
      <div className={style.container}>
        <Input
          label="Город и регион"
          value={city}
          onChange={onChangeCity}
          type={"text"}
          required
          inputClassNames={style.cityInput}
          placeholder="Санкт-Петербург, Россия"
        />
        <Steper />
      </div>
    </Accordeon>
  );
};

export default DeliveryRegion;
