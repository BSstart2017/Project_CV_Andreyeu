import React from "react";
import {ProfileContactsDataType, ProfileResponseDataType} from "../../../api/profile-api";  
import {Row} from "antd";

const ProfileContacts: React.FC<PropsType> = ({profile, setEditMode, isOwner}) => {

  const onSetEditMode = () => {
    setEditMode(true)
  }

  return (
    <Row>
      {isOwner && <div>
          <button onClick={onSetEditMode}>Edit</button>
      </div>}
      <div><b>Full name : </b> {profile.fullName}</div>
      <div><b>About me :</b> {profile.aboutMe}</div>
      <div><b>Looking for a job : </b> {profile.lookingForAJob ? "Yes" : "No"}</div>
      {profile.lookingForAJob && <div><b>My skills :</b> {profile.lookingForAJobDescription}</div>}
      {Object.keys(profile.contacts).map(key => {
          return (
            <div key={key}>
              <b>{key} :</b> {profile.contacts[key as keyof ProfileContactsDataType]}
            </div>
          )
        }
      )}
    </Row>
  );
};

export default ProfileContacts;


type PropsType = {
  profile: ProfileResponseDataType
  setEditMode: (editMode: boolean) => void
  isOwner: boolean
}