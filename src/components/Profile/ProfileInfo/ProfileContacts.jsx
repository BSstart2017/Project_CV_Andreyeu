import React from "react";
import style from "./../Profile.module.css"

const ProfileContacts = ({profile}) => {
  
  return (
    <div className={style.contactContainer}>
      <div><button>Edit</button></div>
      <div><b>Full name : </b> {profile.fullName}</div>
      <div><b>About me :</b> {profile.aboutMe}</div>
      <div><b>Looking for a job : </b> {profile.lookingForAJob ? "Yes" : "No"}</div>
      {profile.lookingForAJob && <div><b>My skills :</b> {profile.lookingForAJobDescription}</div>}
      {Object.keys(profile.contacts).map(key => {return (
        <div key={key} className={style.blockContact}>
          <b>{key} :</b> {profile.contacts[key]}
        </div>
        )}
      )}
    </div>
  );
};

export default ProfileContacts;
