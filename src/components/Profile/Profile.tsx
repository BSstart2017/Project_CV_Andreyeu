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
import {Col, Row, Tabs} from "antd";
import {AppleOutlined} from '@ant-design/icons';
import AboutMe from "../AboutMePage/AboutMe/AboutMe";
import Interests from "../AboutMePage/Interests/Interests";
import PersonalInfo from "../AboutMePage/PersonalInfo/PersonalInfo";

const {TabPane} = Tabs;

const Profile: React.FC = () => {

  const profile = useSelector((state: AppStateType) => state.profileReducer.profile)
  const myId = useSelector((state: AppStateType) => state.authReducer.id)
  const status = useSelector((state: AppStateType) => state.profileReducer.status)

  const dispatch = useDispatch()
  const history = useHistory()
  const match: {
    params: {
      userId: string
    }
  } = useRouteMatch()

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
      <Col span={22}>
        <ProfileInfo isOwner={!match.params.userId} profile={profile} status={status}/>
      </Col>
      <Col span={22} style={{backgroundColor:'white'}}>
        <Tabs defaultActiveKey="2" centered >
          <TabPane tab={<span> <AppleOutlined/>About</span>} key="1">
            <Row justify={"center"} gutter={[48, 16]}>
              <Col span={7}>
                <AboutMe profile={profile} status={status}/>
              </Col>
              <Col span={10}>
                <Interests />
            </Col>
              <Col span={7}>
                <PersonalInfo />
            </Col>
            </Row>
          </TabPane>
          <TabPane tab={<span> <AppleOutlined/>TimeLine</span>} key="2">
            Инфа
          </TabPane>
          <TabPane tab={<span> <AppleOutlined/>Photos</span>} key="3">
            Инфа
          </TabPane>
          <TabPane tab={<span> <AppleOutlined/>Friends</span>} key="4">
            Инфа
          </TabPane>
          <TabPane tab={<span> <AppleOutlined/>Groups</span>} key="5">
            Инфа
          </TabPane>
          <TabPane tab={<span> <AppleOutlined/>Dialogs</span>} key="6">
            Инфа
          </TabPane>
          <TabPane tab={<span> <AppleOutlined/>Chat</span>} key="7">
            Инфа
          </TabPane>
          <TabPane tab={<span> <AppleOutlined/>Credits</span>} key="8">
            Инфа
          </TabPane>
          <TabPane tab={<span> <AppleOutlined/>Ranks</span>} key="9">
            Инфа
          </TabPane>
          <TabPane tab={<span> <AppleOutlined/>Badges</span>} key="10">
            Инфа
          </TabPane>
          <TabPane tab={<span> <AppleOutlined/>Quests</span>} key="11">
            Инфа
          </TabPane>
        </Tabs>
      </Col>
      <Col span={22}>
        <MyPosts/>
      </Col>
    </Row>
  );
}

export default Profile 
