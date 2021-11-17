import React, {useEffect} from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getProfileUser, getProfileStatus, getAddProfileStatus} from "./../../redux/profile-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";

const ProfileContainer = ({match, myId, history, getProfileUser, getProfileStatus, profile, status, getAddProfileStatus }) => {
  
  useEffect(() => {
    let userId = match.params.userId
    if (!userId){
      userId = myId
      if(!userId) {
        history.push("/login")
      }
    }
    getProfileUser(userId)
    getProfileStatus(userId)
}, [match.params.userId, myId])


    return (
      <>
      <Profile profile={profile} status={status}
       getAddProfileStatus={getAddProfileStatus}/>
      </>
    );
}

let mapPropsToState = (state) => ({
  profile: state.profileReducer.profile,
  myId: state.authReducer.id,
  status: state.profileReducer.status
})

export default compose(connect(mapPropsToState, {getProfileUser, getProfileStatus,getAddProfileStatus}), 
withRouter)(ProfileContainer)