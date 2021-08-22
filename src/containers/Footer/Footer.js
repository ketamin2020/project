import React, { useContext } from "react";
import { Context } from "../../context/Context";
import Accordion from "../../common/accordion/Accordion";
import SocialPanel from "../../common/SocialPanel/SocialPanel";
import style from "./Footer.module.css";

const Footer = () => {
  const { footer } = useContext(Context);
  return (
    <footer className={style.footer}>
      <Accordion data={footer.products} />
      <Accordion data={footer.information} />
      <Accordion data={footer.companies} />
      <SocialPanel />
      <form className={style.form}>
        <p className={style.formTitle}>Подпишитесь на наши новости</p>
        <p className={style.inputLabel}>E-mail</p>
        <input
          className={style.formInput}
          type="email"
          name="email"
          placeholder="person@gmail.com"
        />
        <button className={style.submitBtn} type="submit"></button>
      </form>
    </footer>
  );
};

export default Footer;
