import React from "react";
import SideBar from "./components/SideBar";
import HistoryList from "./components/HistoryList";
import style from "./PersonalAccount.module.css";

const PersonalAccount = () => {
  return (
    <section className={style.section}>
      <SideBar />
      <HistoryList />
    </section>
  );
};

export default PersonalAccount;
