import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import style from "./ShopsAdressess.module.css";
import ShopAdressCard from "./components/ShopAdressCard";
import Map from "./components/Map";

const ShopsAdressess = () => {
  const { shopsAddresess } = useContext(Context);
  const [openModal, setOpenModal] = useState(null);
  const [mouseEnter, setMouseEnter] = useState(null);
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(null);
  const mouseEnterHeandler = (e) => {
    setPosX(e.clientX - 80);
    setPosY(e.clientY);
    setMouseEnter(Number(e.target.ownerSVGElement.id));
    setOpenModal(true);
  };
  const mouseLeaveHeandler = (e) => {
    setOpenModal(false);
  };

  return (
    <section className={style.section}>
      <h1 className={style.sectionTitle}>Контакты</h1>
      <ul className={style.cardListItems}>
        {shopsAddresess.map((shop, ind) => (
          <li key={ind} className={style.cardItem}>
            <ShopAdressCard {...shop} />
          </li>
        ))}
      </ul>
      <Map
        mouseEnterHeandler={mouseEnterHeandler}
        mouseLeaveHeandler={mouseLeaveHeandler}
      />

      {shopsAddresess.map(
        (shop, ind) =>
          ind === mouseEnter &&
          openModal && (
            <div
              key={ind}
              style={{ left: posX + "px", top: posY + "px" }}
              className={style.cardItemDesktop}
            >
              {" "}
              <ShopAdressCard {...shop} />{" "}
            </div>
          )
      )}
    </section>
  );
};

export default ShopsAdressess;
