import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
import Chevron from "./Chevron";

const Accordion = ({ data }) => {
  console.log(data.links);
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const content = useRef(null);
  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">{data.title}</p>
        <Chevron
          className={`${setRotate}`}
          width={16}
          height={16}
          fill={"#fff"}
        />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <ul className="listItems">
          {data.links.map(({ linkName, path }, ind) => (
            <li className="item" key={ind}>
              <NavLink className="navLink" to={path}>
                {linkName}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Accordion;
