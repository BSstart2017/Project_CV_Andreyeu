import React from "react";
import style from "./Dialogs.module.css"

const Dialogs = () => {
    return (
    <div className={style.dialogs}> 
      <div className={style.dialogItems}>
        <div className={style.dialog + ' ' + style.active}> Dima </div>
        <div className={style.dialog}> Serg </div>
        <div className={style.dialog}> Palina </div>
        <div className={style.dialog}> Alisa</div>
        <div className={style.dialog}> Andrei </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hi</div>
        <div className={style.message}>My name</div>
        <div className={style.message}>Hello my friend</div>
      </div>
    </div>
    )
  }

  export default Dialogs