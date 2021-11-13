import React from "react";
import style from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus/ProfileStatus.jsx"

const ProfileInfo = (props) => {
    return (
      <div>
        {props.profile===null ? <></> : <><div>
          <img src={props.profile.photos.large} alt='noPhoto' />
        </div>
          <ProfileStatus statusText={props.status} getAddProfileStatus={props.getAddProfileStatus}/></>}
      </div>
    )
  }

export default ProfileInfo 