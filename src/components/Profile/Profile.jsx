import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

const Profile = () => {
    return (
      <div>
        <div>
          <img src="https://www.korcula-larus.com/wp-content/uploads/2018/06/holiday-house-korcula-more-beach-06.jpg" alt='df' />
        </div>
        <div>
          <h2>description</h2>
        </div>
        <MyPosts />
      </div>
    );
  }

export default Profile 