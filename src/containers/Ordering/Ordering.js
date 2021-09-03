import React from "react";
import OrderingList from "./components/OrderingList";
import DeliveryRegion from "./components/DeliveryRegion";
import DeliveryMethod from "./components/DeliveryMethod";
import PaymentMethod from "./components/PaymentMethod";
import ContactDetails from "./components/ContactDetails";
import style from "./Ordering.module.css";

const Ordering = () => {
  return (
    <section className={style.section}>
      <h2 className={style.sectionTitle}>Оформление заказа</h2>
      <OrderingList />
      <DeliveryRegion />
      <DeliveryMethod />
      <PaymentMethod />
      <ContactDetails />
      <button className={style.btnSubmit}>Оформить заказ</button>
    </section>
  );
};

export default Ordering;
