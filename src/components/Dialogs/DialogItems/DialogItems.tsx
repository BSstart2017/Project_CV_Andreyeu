import React from "react";
import { NavLink } from "react-router-dom";
import style from "./DialogItems.module.css";

const DialogItem : React.FC<DialogItemPropsType> = ({ id, name }) => {
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={"/dialogs/" + id} activeClassName={style.active}>
        {name}
      </NavLink>
    </div>
  );
};

export default DialogItem;


type DialogItemPropsType = {
  id : number
  name : string
}
