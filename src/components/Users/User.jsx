import React from "react";
import style from "./Users.module.css";
import userDefaultIg from "./../../assets/images/userDefault.jpg";
import { NavLink } from "react-router-dom";

const User = ({ user, isToggleFollow, toggleUnFollow, toggleFollow }) => {
  return (
    <div className={style.container}>
      <div className={style.leftBlock}>
        <NavLink to={"profile/" + user.id}>
          <img
            className={style.photoAva}
            src={user.photos.small != null ? user.photos.small : userDefaultIg}
            alt="noPhoto"
          />
        </NavLink>
        {user.followed ? (
          <button
            disabled={isToggleFollow.some((id) => id === user.id)}
            onClick={() => {
              toggleUnFollow(user.id);
            }}
          >
            Unfollow
          </button>
        ) : (
          <button
            disabled={isToggleFollow.some((id) => id === user.id)}
            onClick={() => {
              toggleFollow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
      <div className={style.rightBlock}>
        <div>
          <div>My name is {user.name}</div>
          <div>Status: {user.status}</div>
        </div>
        <div>
          <div>I am from {"user.location.country"}</div>
          <div>My love city is {"user.location.city"}</div>
        </div>
      </div>
    </div>
  );
};

export default User;
