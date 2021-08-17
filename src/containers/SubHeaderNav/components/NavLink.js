import React from "react";
import { NavLink } from "react-router-dom";

const LinkItem = ({ linkName, path, styleClass }) => {
  return (
    <NavLink className={styleClass} to={path}>
      {linkName}
    </NavLink>
  );
};

export default LinkItem;
