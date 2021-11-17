import React from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import userDefaultImg from "./../../../assets/images/userDefault.jpg";
import ProfileContacts from "./ProfileContacts";
import ProfileContactsForm from "./ProfileContactsForm";

const ProfileInfo = ({profile, status, getAddProfileStatus, getNewAvatar,isOwner}) => {

  const onAddNewAvatar = (e) =>{
    if(e.target.files.length > 0) getNewAvatar(e.target.files[0])
  }

    return (
      <div>
        {profile===null ? <></> : <><div>
          <img src={profile.photos.large || userDefaultImg} alt='noPhoto' />
        </div>
        {isOwner && <div><input type="file" onChange={onAddNewAvatar}/></div>}

          <ProfileContacts profile={profile}/>
          <ProfileContactsForm />
          <ProfileStatus statusText={status} getAddProfileStatus={getAddProfileStatus}/></>}
      </div>
    )
  }

export default ProfileInfo 