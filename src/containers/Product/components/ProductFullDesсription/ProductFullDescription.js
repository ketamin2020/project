import React, { useContext, useState } from "react";
import { Context } from "../../../../context/Context";
import DescriptionList from "../DescriptionList/DescriptionList";
import style from "./ProductFullDescription.module.css";
import classnames from "classnames";

const ProductFullDescription = () => {
  const { deliverySection, fullDescription, feature } = useContext(Context);
  const [activeBtn, setActiveBtn] = useState(1);
  const activeBtnHeandler = (index) => {
    setActiveBtn(index);
  };
  return (
    <div className={style.container}>
      <div className={style.deliveryWraper}>
        <img
          src={deliverySection.deliveryImage}
          className={style.deliveryImage}
          alt="delivery"
        />
        <div className={style.deliveryContent}>
          <h2 className={style.deliveryTitle}>{deliverySection.title}</h2>
          <p className={style.deliverySubTitle}>{deliverySection.subTitle}</p>
          <button className={style.deliveryBtn}>Узнать условия</button>
        </div>
      </div>
      <nav className={style.descriptionNav}>
        <ul className={style.navDescriptionListItems}>
          {fullDescription.navDescription.map(({ title }, ind) => (
            <li
              onClick={() => activeBtnHeandler(ind)}
              key={ind}
              className={classnames(
                style.navDescriptionItem,
                activeBtn === ind ? style.navDescriptionItemActive : ""
              )}
            >
              <p className={style.navItem}>{title}</p>
            </li>
          ))}
        </ul>
      </nav>
      <div className={style.description}>
        {activeBtn === 1 && <DescriptionList list={feature[0]} />}
        {activeBtn === 0 && <DescriptionList list={feature[1]} />}
        {activeBtn === 2 && <DescriptionList list={feature[0]} />}
        {activeBtn === 3 && <DescriptionList list={feature[1]} />}
      </div>
    </div>
  );
};

export default ProductFullDescription;
