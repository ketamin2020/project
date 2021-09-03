import React, { useState } from "react";
import validator from "validator";
import Accordeon from "./Accordeon";
import Steper from "./Steper";
import Input from "../../../common/Input/Input";
import style from "./ContactDetails.module.css";

const ContactDetails = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [surName, setSurName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState(null);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeSurName = (e) => {
    setSurName(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    if (!validator.isEmail(e.target.value)) {
      return setEmailError("Введите правильный email");
    }

    setEmailError(null);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };
  return (
    <Accordeon title="Контактные данные">
      <div className={style.container}>
        <Input
          onChange={onChangeName}
          type="text"
          label="Имя"
          value={name}
          required
          inputClassNames={style.input}
        />
        <Input
          onChange={onChangeSurName}
          type="text"
          label="Фамилия"
          value={surName}
          required
          inputClassNames={style.input}
        />
        <Input
          onChange={onChangeEmail}
          type="text"
          error={emailError}
          label="E-mail"
          value={email}
          required
          inputClassNames={style.input}
          placeholder="person@gmail.com"
        />
        <Input
          onChange={onChangePhone}
          type="text"
          label="Телефон"
          value={phone}
          required
          inputClassNames={style.input}
          placeholder="+7 999 346 45 65"
        />
        <Steper />
      </div>
    </Accordeon>
  );
};

export default ContactDetails;
