import React,{useEffect} from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getActivePageSelector, getIsPreloaderSelector, getIsToggleFollowSelector, 
  getPageCountSelector, getTotalUsersSelector, getUsersSelector } from "../../redux/Selectors/usersSelectors";
import {toggleUnFollow, getUsers, toggleFollow } from "../../redux/users-reducer";
import Preloader from "./../commons/Preloader/Preloader";
import Users from './Users';

const UsersContainer = ({getUsers,pageCount, activePage, isPreloader, totalUsers, users, isToggleFollow, isLogin,
  toggleFollow, toggleUnFollow }) => {

  useEffect(() => {
    getUsers(activePage, pageCount)
})

  const setCurrentPage = (page) => {
    getUsers(page, pageCount)
   }
   
      return <>
      {isPreloader ? <Preloader /> 
      : <Users totalUsers = {totalUsers} pageCount={pageCount} activePage={activePage}
      users = {users} setCurrentPage = {setCurrentPage} isToggleFollow= {isToggleFollow} 
      toggleFollow={toggleFollow} toggleUnFollow={toggleUnFollow} isLogin={isLogin}
     />} 
      </>
}

let mapPropsToState = (state) => {
  return {
    users: getUsersSelector(state),
    pageCount: getPageCountSelector(state),
    totalUsers: getTotalUsersSelector(state),
    activePage: getActivePageSelector(state),
    isPreloader: getIsPreloaderSelector(state),
    isToggleFollow: getIsToggleFollowSelector(state)
  }
}

export default compose(connect(mapPropsToState, { getUsers, toggleFollow, toggleUnFollow} ),
withAuthRedirect)(UsersContainer)

