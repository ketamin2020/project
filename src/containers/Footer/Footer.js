import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { NavLink } from "react-router-dom";
import Accordion from "../../common/accordion/Accordion";
import SocialPanel from "../../common/SocialPanel/SocialPanel";
import style from "./Footer.module.css";

const Footer = () => {
  const { footer } = useContext(Context);
  const { products, information, companies } = footer;
  return (
    <footer className={style.footer}>
      <Accordion title={products.title}>
        <ul className="listItems">
          {products.links.map(({ linkName, path }, ind) => (
            <li className="item" key={ind}>
              <NavLink className="navLink" to={path}>
                {linkName}
              </NavLink>
            </li>
          ))}
        </ul>
      </Accordion>
      <Accordion title={information.title}>
        <ul className="listItems">
          {information.links.map(({ linkName, path }, ind) => (
            <li className="item" key={ind}>
              <NavLink className="navLink" to={path}>
                {linkName}
              </NavLink>
            </li>
          ))}
        </ul>
      </Accordion>
      <Accordion title={companies.title}>
        <ul className="listItems">
          {companies.links.map(({ linkName, path }, ind) => (
            <li className="item" key={ind}>
              <NavLink className="navLink" to={path}>
                {linkName}
              </NavLink>
            </li>
          ))}
        </ul>
      </Accordion>
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
