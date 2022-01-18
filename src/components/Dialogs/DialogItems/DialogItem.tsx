import React, {FC} from "react";
import {NavLink} from "react-router-dom";
import style from "./DialogItems.module.css";

const DialogItem: FC<PropsType> = ({id, name}) => {
  return (<div>
          <NavLink to={"/dialogs/" + id} className={style.dialog + " " + style.active} activeClassName={style.active}>
              {name}
          </NavLink>
  </div>
  )
};

export default DialogItem;


type PropsType = {
  id: number
  name: string
}
