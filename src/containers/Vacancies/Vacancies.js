import React, { useContext } from "react";
import { Context } from "../../context/Context";
import style from "./Vacancies.module.css";

const Vacancies = () => {
  const { vacancies, navBarPhone, email } = useContext(Context);
  return (
    <section className={style.section}>
      <h2 className={style.sectionTitle}>Вакансии</h2>
      <ul className={style.vacanciesListItems}>
        <li className={style.vacanciesTitle}>
          <p className={style.position}>Позиция</p>
          <p className={style.experience}>Опыт работы</p>
          <p className={style.salary}>Зарплата</p>
          <p className={style.info}>Информация</p>
        </li>
        {vacancies.map(({ position, experience, salary, info }, ind) => (
          <li key={ind} className={style.vacanciesItem}>
            <p className={style.vacanciesPosition}>{position}</p>
            <p className={style.vacanciesExperience}>{experience}</p>
            <p className={style.vacanciesSalary}>{salary}</p>
            <p className={style.vacanciesInfo}>{info}</p>
          </li>
        ))}
      </ul>
      <div className={style.contactsInfoWrapper}>
        <p className={style.department}>Отдел кадров:</p>
        <a className={style.cantactPhone} href={`tel:+${navBarPhone}`}>
          {navBarPhone}
        </a>
        <a className={style.contactEmail} href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </section>
  );
};

export default Vacancies;
