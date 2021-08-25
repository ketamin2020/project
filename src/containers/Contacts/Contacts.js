import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import style from "./Contacts.module.css";
import Input from "../../common/Input/Input";
import TextArea from "../../common/TextArea/TextArea";
import validator from "validator";

const Contacts = () => {
  const { navBarPhone, email, address, map } = useContext(Context);
  const [emailForm, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [messageError, setMessageError] = useState(null);

  const onChangeName = (e) => {
    setName(e.target.value);
    if (validator.isEmpty(e.target.value)) {
      return setNameError("Введите корректное имя");
    }
    setNameError(null);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.value);
    if (!validator.isNumeric(e.target.value)) {
      return setPhoneError("Введите корректный телефон");
    }
    setPhoneError(null);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    if (!validator.isEmail(e.target.value)) {
      return setEmailError("Введите корректный email");
    }
    setEmailError(null);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
    if (!validator.isEmpty(e.target.value)) {
      return setMessageError("Введите корректное сообщение");
    }
    setMessageError(null);
  };
  const resetErrorOnClick = (e) => {
    if (e.target.nodeName !== "INPUT") {
      setMessageError(null);
      setEmailError(null);
      setPhoneError(null);
      setNameError(null);
    }
  };
  //   const handlerSubmit = (e) => {
  //     e.preventDefault();
  //     if (emailError) return;
  //     dispatch(login(email, password));
  //     setEmail("");
  //     setPassword("");
  //     resetError();
  //   };

  return (
    <section onClick={resetErrorOnClick} className={style.section}>
      <div className={style.contactsWrapper}>
        <h2 className={style.sectionTitle}>Контакты</h2>
        <ul className={style.listItems}>
          <li className={style.item}>
            <p className={style.labelItem}> Фактический адрес</p>
            <p className={style.item}>{address}</p>
          </li>
          <li className={style.item}>
            <p className={style.labelItem}> Ежедневно, с 9:00 до 21:00</p>
            <a className={style.item} href={`tel:+${navBarPhone}`}>
              {navBarPhone}
            </a>
          </li>
          <li className={style.item}>
            <p className={style.labelItem}> По вопросам розничных продаж</p>
            <a className={style.item} href={`mailto:${email}`}>
              {email}
            </a>
          </li>
        </ul>
        <img src={map} alt="map" className={style.googleMap} />
      </div>
      <h2 className={style.sectionTitle}>Обратная связь</h2>
      <form onChange={resetErrorOnClick} className={style.form}>
        <div className={style.inputContainer}>
          <Input
            label="Имя"
            placeholder="Иванов Иван"
            value={name}
            error={nameError}
            onChange={onChangeName}
            type={"text"}
            errorMessage={nameError}
            required
          />
          <Input
            label="Телефон"
            placeholder={navBarPhone}
            value={phone}
            error={phoneError}
            onChange={onChangePhone}
            type={"tel"}
            errorMessage={phoneError}
            required
          />
          <Input
            label="E-mail"
            placeholder={email}
            value={emailForm}
            error={emailError}
            onChange={onChangeEmail}
            type={"text"}
            errorMessage={emailError}
            required
          />
        </div>
        <div className={style.textFieldContainer}>
          <TextArea
            label="Ваше сообщение"
            value={message}
            error={messageError}
            onChange={onChangeMessage}
            type={"text"}
            errorMessage={messageError}
            required
          />
          <button className={style.buttonSubmit} type="submit">
            Отправить
          </button>
          <p className={style.agreementText}>
            Нажимая кнопку "Получить консультацию" я соглашаюсь с политикой
            конфиденциальности
          </p>
        </div>
      </form>
    </section>
  );
};

export default Contacts;
