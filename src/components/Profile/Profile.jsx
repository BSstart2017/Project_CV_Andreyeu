import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, status, getAddProfileStatus, getNewAvatar, isOwner}) => {
    return (
      <div>
        <ProfileInfo isOwner={isOwner} getNewAvatar={getNewAvatar} profile={profile} status={status} getAddProfileStatus={getAddProfileStatus}/>
        <MyPostsContainer />
      </div>
    );
  }

export default Profile 