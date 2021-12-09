import React, {useEffect} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {
  getProfileStatus,
  getProfileUser
} from "../../redux/profile-reducer";
import {useHistory, useRouteMatch} from "react-router-dom";
import {Col, Row} from "antd";

const Profile: React.FC = () => {

  const profile = useSelector((state: AppStateType) => state.profileReducer.profile)
  const myId = useSelector((state: AppStateType) => state.authReducer.id)
  const status = useSelector((state: AppStateType) => state.profileReducer.status)

  const dispatch = useDispatch()
  const history = useHistory()
  const match: { params: {
    userId: string
    }} = useRouteMatch()

  useEffect(() => {
    let userId: number | null = +match.params.userId
    if (!userId) {
      userId = myId
      if (!userId) {
        history.push("/login")
        throw new Error("id should exists in URI params or in state ")
      }
    }
    dispatch(getProfileUser(userId))
    dispatch(getProfileStatus(userId))
  }, [match.params.userId])

    return (
      <Row justify={"center"}>
          <Col span={18}>
            <ProfileInfo isOwner={!match.params.userId} profile={profile} status={status}/>
          </Col>
          <Col span={18}>
            <MyPosts />
          </Col>
      </Row>
    );
  }

export default Profile 
