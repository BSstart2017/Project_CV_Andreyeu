import React, {useEffect} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
  getProfileStatus,
  getProfileUser
} from "../../redux/profile-reducer";
import {useHistory} from "react-router-dom";

const Profile: React.FC = () => {

  const profile = useSelector((state: AppStateType) => state.profileReducer.profile)
  const myId = useSelector((state: AppStateType) => state.authReducer.id)
  const status = useSelector((state: AppStateType) => state.profileReducer.status)

  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    let userId: number | null = +history.location.pathname.split('/')[history.location.pathname.split('/').length - 1]
    if (!userId) {
      userId = myId
      if (!userId) {
        history.push("/login")
        throw new Error("id should exists in URI params or in state ")
      }
    }
    dispatch(getProfileUser(userId))
    dispatch(getProfileStatus(userId))
  }, [history.location.pathname])

    return (
      <div>
        <ProfileInfo isOwner={!+history.location.pathname.split('/')[history.location.pathname.split('/').length - 1]} profile={profile} status={status}/>
        <MyPosts />
      </div>
    );
  }

export default Profile 
