import React from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus"

const ProfileInfo = ({profile, status, getAddProfileStatus}) => {
    return (
      <div>
        {profile===null ? <></> : <><div>
          <img src={profile.photos.large} alt='noPhoto' />
        </div>
          <ProfileStatus statusText={status} getAddProfileStatus={getAddProfileStatus}/></>}
      </div>
    )
  }

export default ProfileInfo 