import React from "react";
import { ProfileResponseDataType } from "../../api/profile-api";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import { ProfileContainerOwnPropsType } from "./ProfileContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile: React.FC<ProfileStateToPropsType & ProfileDispatchToProps & ProfileContainerOwnPropsType> = ({profile, status, getAddProfileStatus,getNewContactsEdit, getNewAvatar, isOwner}) => {
    return (
      <div>
        <ProfileInfo isOwner={isOwner} getNewContactsEdit={getNewContactsEdit} getNewAvatar={getNewAvatar} profile={profile} status={status} getAddProfileStatus={getAddProfileStatus}/>
        <MyPostsContainer />
      </div>
    );
  }

export default Profile 




export type ProfileStateToPropsType = {
  profile: ProfileResponseDataType | null
  status : string
}

export type ProfileDispatchToProps = {
  getNewAvatar: (file: File) => void
  getAddProfileStatus : (status : string) => void
  getNewContactsEdit : (profile : ProfileResponseDataType) => void
}