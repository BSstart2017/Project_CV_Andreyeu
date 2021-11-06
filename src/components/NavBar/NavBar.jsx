/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

const SiteBar = () => {
  return (
    <div className={style.siteBar}>
      <div>
        <NavLink to="/profile" activeClassName={style.active}>
          Profile
        </NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" activeClassName={style.active}>
          Dialogs
        </NavLink>
      </div>
      <div>
        <NavLink to="/users" activeClassName={style.active}>
          Users
        </NavLink>
      </div>
      <div>
        <a href="">News</a>
      </div>
      <div>
        <a href="">Music</a>
      </div>
      <div>
        <a href="">Settings</a>
      </div>
    </div>
  );
};

export default SiteBar;
