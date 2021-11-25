import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {getProfileUser, getProfileStatus, getNewAvatar, getAddProfileStatus,getNewContactsEdit} from "../../redux/profile-reducer";
import { RouteComponentProps, withRouter } from "react-router";
import { compose } from "redux";
import { AppStateType } from "../../redux/store";
import { ProfileResponseDataType } from "../../api/profile-api";

const ProfileContainer: React.FC<PropsType> = 
({getNewAvatar, match, myId, history, getNewContactsEdit, 
  getProfileUser, getProfileStatus, profile, status, getAddProfileStatus }) => {
  
  React.useEffect(() => {
    let userId : number | null = +match.params.userId
    if (!userId){
      userId = myId
        if (!userId){
          history.push("/login")
          throw new Error("id should exists in URI params or in state ")
        }
        getProfileUser(userId)
        getProfileStatus(userId)
    }  
},[match.params.userId])

    return (
      <>
      <Profile isOwner={!match.params.userId} getNewContactsEdit={getNewContactsEdit} getNewAvatar={getNewAvatar}
       profile={profile as ProfileResponseDataType} status={status}
       getAddProfileStatus={getAddProfileStatus}/>
      </>
    );
}

let mapPropsToState = (state : AppStateType) : ProfileContainerStateToPropsType => ({
  profile: state.profileReducer.profile,
  myId: state.authReducer.id,
  status: state.profileReducer.status
})

export default compose<React.ComponentType>(connect<ProfileContainerStateToPropsType, ProfileContainerDispatchToProps, {}, AppStateType >
  (mapPropsToState, {getProfileUser, getNewContactsEdit, getNewAvatar, getProfileStatus,getAddProfileStatus}), 
withRouter)(ProfileContainer)


type ProfileContainerStateToPropsType = {
  profile: ProfileResponseDataType | null
  myId: number | null
  status : string
}

type ProfileContainerDispatchToProps = {
  getProfileUser: (userId : number) => void
  getNewAvatar: (file: File) => void
  getProfileStatus: (userId : number) => void
  getAddProfileStatus : (status : string) => void
  getNewContactsEdit : (profile : ProfileResponseDataType) => void
}

type PathParamsType = {
  userId : string
}

export type ProfileContainerOwnPropsType = {
  isOwner: boolean
}

type PropsType = ProfileContainerOwnPropsType & ProfileContainerStateToPropsType & 
ProfileContainerDispatchToProps & RouteComponentProps<PathParamsType>