import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogItems.module.css";

const DialogItem = props =>{
  return  ( 
  <div className={style.dialog + " " + style.active}> 
  <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>{props.name}</NavLink>  
  </div>);
}

export default DialogItem;
