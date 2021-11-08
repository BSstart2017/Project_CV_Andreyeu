import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "./../../commons/Preloader/Preloader";

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }
    return (
      <div>
        <div>
          <img src="https://www.korcula-larus.com/wp-content/uploads/2018/06/holiday-house-korcula-more-beach-06.jpg" alt='noPhoto' />
        </div>
        <div>
          <img src={props.profile.photos.large} alt='noPhoto' />
        </div>
        <div className={style.profileInfoBlock}>
          <h2>description</h2>
        </div>
      </div>
    );
  }

export default ProfileInfo 