import React, {useEffect} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {getProfileStatus, getProfileUser} from "../../redux/profile-reducer";
import {Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import {Col, Row, Tabs} from "antd";
import {AppleOutlined} from '@ant-design/icons';
import {NavLink} from "react-router-dom";
import AboutMePage from "../../Pages/ProfilePage/AboutMePage/AboutMePage";
import TimeLinePage from "../../Pages/ProfilePage/TimeLinePage/TimeLinePage";
import {actions} from "../../redux/users-reducer";
import {getProfileSelector, getProfileStatusSelector} from "../../redux/Selectors/profileSelector";
import {getIdSelector} from "../../redux/Selectors/authSelector";

const {TabPane} = Tabs;

const Profile: React.FC = () => {

  const profile = useSelector(getProfileSelector)
  const myId = useSelector(getIdSelector)
  const status = useSelector(getProfileStatusSelector)

  const dispatch = useDispatch()
  const history = useHistory()
  const match:{ params: { userId: string } } = useRouteMatch()

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
    return () => {
      dispatch(actions.setNullNextFriendsUsers())
      dispatch(actions.setTotalUsers(0))
    }
  }, [match.params.userId, dispatch, history, myId])

  return (
    <Row justify={"center"}>
      <Col span={22}>
        <ProfileInfo isOwner={!match.params.userId} profile={profile} status={status}/>
      </Col>
      <Col span={22} style={{backgroundColor:'white', marginTop: 20, marginBottom: 20, borderRadius: '30px'}} >
        <Tabs defaultActiveKey="2" centered >
            <TabPane tab={<NavLink to='/profile/aboutMe' > <AppleOutlined/>About</NavLink>} key="1" />
            <TabPane tab={<NavLink to='/profile' > <AppleOutlined/>TimeLine</NavLink>} key="2" />
            <TabPane tab={<NavLink to='/profile/photos' > <AppleOutlined/>Photos</NavLink>} key="3" />
            <TabPane tab={<NavLink to='/profile/friends' > <AppleOutlined/>Friends</NavLink>} key="4" />
            <TabPane tab={<NavLink to='/profile/groups' > <AppleOutlined/>Groups</NavLink>} key="5" />
            <TabPane tab={<NavLink to='/profile/dialogs' > <AppleOutlined/>Dialogs</NavLink>} key="6" />
            <TabPane tab={<NavLink to='/profile/chat' > <AppleOutlined/>Chat</NavLink>} key="7" />
            <TabPane tab={<NavLink to='/profile/credits' > <AppleOutlined/>Credits</NavLink>} key="8" />
            <TabPane tab={<NavLink to='/profile/ranks' > <AppleOutlined/>Ranks</NavLink>} key="9" />
            <TabPane tab={<NavLink to='/profile/badges' > <AppleOutlined/>Badges</NavLink>} key="10" />
            <TabPane tab={<NavLink to='/profile/quests' > <AppleOutlined/>Quests</NavLink>} key="11" />
        </Tabs>
      </Col>
      <Col span={22}>
        <Switch >
          <Route path="/profile/aboutMe" render={() => <AboutMePage /> }/>
          <Route path="/profile" render={() =>  <TimeLinePage />}/>
        </Switch>
      </Col>
    </Row>
  );
}

export default Profile 
