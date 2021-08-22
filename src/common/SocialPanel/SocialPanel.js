import React, { useContext } from "react";
import { Context } from "../../context/Context";
import style from "./SocialPanel.module.css";

const SocialPanel = () => {
  const { socialImage, navBarPhone } = useContext(Context);
  return (
    <div className={style.socialWraper}>
      <a className={style.phone} href={`${"tel:" + navBarPhone}`}>
        {navBarPhone}
      </a>
      {socialImage.map(({ image }, ind) => (
        <a key={ind} className={style.socialLink} href="">
          <img src={image} alt="socialIcon" className={style.socialIcon} />
        </a>
      ))}
    </div>
  );
};

export default SocialPanel;
