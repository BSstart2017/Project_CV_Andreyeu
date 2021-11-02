import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
      <div>
        <div>
          <img src="https://www.korcula-larus.com/wp-content/uploads/2018/06/holiday-house-korcula-more-beach-06.jpg" alt='df' />
        </div>
        <div className={style.profileInfoBlock}>
          <h2>description</h2>
        </div>
      </div>
    );
  }

export default ProfileInfo 