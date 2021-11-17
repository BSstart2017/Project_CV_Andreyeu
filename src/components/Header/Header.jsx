import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css"

const Header = ({isLogin, login, getLogout}) => {
      return (
        <div className={style.header}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/2000px-NBC_logo.svg.png" 
          alt='noPhoto'/>
          <div className={style.rightBlock}>
              {isLogin 
               ? <div>
                 <span>{login}</span>
                  <button onClick={getLogout}>log out</button>
                 </div>
               : <NavLink to={'/login'}>Login</NavLink>}
          </div>
        </div>
      );
    }

export default Header