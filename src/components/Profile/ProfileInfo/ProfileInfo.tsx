import React from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import userDefaultImg from "./../../../assets/images/userDefault.jpg";
import ProfileContacts from "./ProfileContacts";
import ProfileContactsForm, { ProfileContactsFormDataType } from "./ProfileContactsForm";
import { ProfileResponseDataType } from "../../../api/profile-api";
import { ProfileContainerOwnPropsType } from "../ProfileContainer";
import {ProfileStateToPropsType, ProfileDispatchToProps} from './../Profile'

const ProfileInfo: React.FC<ProfileStateToPropsType & ProfileDispatchToProps & ProfileContainerOwnPropsType> = ({profile, status, getAddProfileStatus, getNewAvatar, isOwner, getNewContactsEdit}) => {

  const [editMode, setEditMode] = React.useState(false)

  const onAddNewAvatar = (e : React.ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files?.length) getNewAvatar(e.target.files[0])
  }

  let onSubmit = (formData : ProfileContactsFormDataType) => {
    getNewContactsEdit(formData as ProfileResponseDataType)
    setEditMode(false)
  }

    return (
      <div>
        {profile===null ? <></> : <><div>
          <img src={profile.photos.large || userDefaultImg} alt='noPhoto' />
        </div>
        {isOwner && <div><input type="file" onChange={onAddNewAvatar}/></div>}
          {editMode ? <ProfileContactsForm initialValues={profile} setEditMode={setEditMode} onSubmit={onSubmit} profile={profile}/>
          : <ProfileContacts profile={profile} isOwner={isOwner} setEditMode={setEditMode}/>}
          <ProfileStatus statusText={status} getAddProfileStatus={getAddProfileStatus}/></>}
      </div>
    )
  }

export default ProfileInfo 

