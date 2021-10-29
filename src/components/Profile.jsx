import React from "react";
import style from "./Profile.module";

const Profile = () => {
    return (
      <div className={style.main}>
        <div>
          <img src="https://www.korcula-larus.com/wp-content/uploads/2018/06/holiday-house-korcula-more-beach-06.jpg" alt='df' />
        </div>
        <div>
          <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt='df' />
          <h2>description</h2>
        </div>
        <div>
          my post
          <div>
            new post
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    );
  }

export default Profile 