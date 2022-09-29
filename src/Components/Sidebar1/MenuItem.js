import React, { useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

const MenuItem = (props) => {

  const { title, subMenu, icon, onClick, link, exact } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li title={title} onClick={props.onClick}>
      <a
        exact
        href={link}
        className={'menu-item'}
        id={window.location.pathname === link ? "active" : ""}
        onClick={() => setExpand(!expand)}
      >
        <div  className="menu-icon">
          {icon}
        </div>
        <span>{title}</span>
        <div className="dropdown-icon">
          {subMenu && subMenu.length > 0 ? (
            expand ? <RiArrowDropUpLine /> : <RiArrowDropDownLine />
          ): null}
        </div>
      </a>
      {subMenu && subMenu.length > 0 ? (
        <ul className={`sub-menu ${expand ? "" : "inactive"}`}>
          {subMenu.map((menu, index) => (
            <li key={index}>
              <a href={menu.link}>{menu.title}</a>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default MenuItem;