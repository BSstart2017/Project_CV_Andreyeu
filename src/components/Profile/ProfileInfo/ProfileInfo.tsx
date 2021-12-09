import React, {ChangeEvent, FC, useState} from "react";
import ProfileStatus from "./ProfileStatus/ProfileStatus"
import userDefaultImg from "./../../../assets/images/userDefault.jpg";
import ProfileContacts from "./ProfileContacts";
import ProfileContactsForm, {ProfileContactsFormDataType} from "./ProfileContactsForm";
import {ProfileResponseDataType} from "../../../api/profile-api";
import {useDispatch} from "react-redux";
import {getNewAvatar, getNewContactsEdit} from "../../../redux/profile-reducer";

const ProfileInfo: FC<PropsType> = (
  {profile, status, isOwner}
) => {

  const dispatch = useDispatch()



  const [editMode, setEditMode] = useState(false)

  const onAddNewAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) dispatch(getNewAvatar(e.target.files[0]))
  }

  let onSubmit = (formData: ProfileContactsFormDataType) => {
    dispatch(getNewContactsEdit(formData as ProfileResponseDataType))
    setEditMode(false)
  }

  return (
    <div style={{ background: `url(${process.env.PUBLIC_URL}/assets/images/Members/5f6d2c93c75db-bp-cover-image.jpg)
     center center / cover no-repeat`,borderRadius:'30px', height:'70%'}}>
      {profile === null ? <></>
        : <>
        <div style={{textAlign: 'center', paddingTop: 200}}>
          <img src={profile.photos.small || userDefaultImg} alt='noPhoto'/>
        </div>
        {isOwner && <div><input type="file" onChange={onAddNewAvatar}/></div>}
        {editMode ?
          <ProfileContactsForm initialValues={profile} setEditMode={setEditMode} onSubmit={onSubmit} profile={profile}/>
          : <ProfileContacts profile={profile} isOwner={isOwner} setEditMode={setEditMode}/>}
        <ProfileStatus statusText={status} />
      </>}
    </div>
  )
}

export default ProfileInfo

type PropsType = {
  profile: ProfileResponseDataType | null
  status: string
  isOwner: boolean
}

