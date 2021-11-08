import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css"

const Header = (props) => {
      return (
        <div className={style.header}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/2000px-NBC_logo.svg.png" alt='df'/>
          <div className={style.rightBlock}>
              {props.isLogin ? props.login : <NavLink to={'/login'}>Login</NavLink>}
          </div>
        </div>
      );
    }

export default Header