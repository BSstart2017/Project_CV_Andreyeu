import React, {FC, useEffect, useState} from 'react';
import {Col, Row} from "antd";
import AboutMe from "../../../components/AboutMe/AboutMe";
import CustomerIcons from "../../../components/CustomerIcons/CustomerIcons";
import MyPosts from "../../../components/Profile/MyPosts/MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {
  getIconsBadgesSelector,
  getIconsQuestsSelector
} from "../../../redux/Selectors/profileSelector";
import CustomerIconsContent from "../../../components/CustomerIconsContent/CustomerIconsContent";
import {
  getFriendsUsersSelector,
  getPageCountSelector,
  getTotalUsersSelector
} from "../../../redux/Selectors/usersSelectors";
import {getFriendsUsers} from "../../../redux/users-reducer";


const TimeLinePage: FC  = React.memo(() => {
  const iconsBadges = useSelector(getIconsBadgesSelector)
  const iconsQuests = useSelector(getIconsQuestsSelector)
  const iconsFriends = useSelector(getFriendsUsersSelector)
  const friendsCount = useSelector(getPageCountSelector)
  const totalUsers = useSelector(getTotalUsersSelector)

  let [nextFriendsCount, setNextFriendsCount] = useState<number>(1);
  const onNext = () => {
    setNextFriendsCount(()=> nextFriendsCount + 1)
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getFriendsUsers(nextFriendsCount,friendsCount, {term:'', friend: true}))
  }, [nextFriendsCount,dispatch, friendsCount])

  return (
    <Row justify={"space-between"}>
      <Col span={6} >
          <AboutMe/>
          <CustomerIcons title={'Badges'} icons={iconsBadges} />
          <CustomerIcons title={'Quests'} icons={iconsQuests} />
          <CustomerIconsContent total={totalUsers} title={'Friends'} icons={iconsFriends} next={onNext} />
      </Col>
      <Col span={10}>
          <MyPosts />
      </Col>
      <Col span={6}>
        <CustomerIcons title={'Badges'} icons={iconsBadges} />
      </Col>
    </Row>
  )
})

export default TimeLinePage