import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({profile, status, getAddProfileStatus}) => {
    return (
      <div>
        <ProfileInfo profile={profile} status={status} getAddProfileStatus={getAddProfileStatus}/>
        <MyPostsContainer />
      </div>
    );
  }

export default Profile 