import { useContext } from "react";
import NavLink from "./components/NavLink";
import { Context } from "../../context/Context";
import style from "./SubHeaderNav.module.css";
const SubHeaderNav = () => {
  const { navBarLink, navBarPhone } = useContext(Context);
  return (
    <nav className={style.nav}>
      <ul className={style.linkListItems}>
        {navBarLink.map(({ linkName, path }, idx) => (
          <li key={idx} className={style.linkItem}>
            <NavLink linkName={linkName} path={path} styleClass={style.link} />
          </li>
        ))}
      </ul>
      <a className={style.phoneLink} href={`${"tel:" + navBarPhone}`}>
        {navBarPhone}
      </a>
    </nav>
  );
};

export default SubHeaderNav;
