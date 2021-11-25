import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { UserResponseType } from "../../api/users-api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getActivePageSelector, getIsPreloaderSelector, getIsToggleFollowSelector, 
  getPageCountSelector, getTotalUsersSelector, getUsersSelector } from "../../redux/Selectors/usersSelectors";
import { AppStateType } from "../../redux/store";
import {toggleUnFollow, getUsers, toggleFollow } from "../../redux/users-reducer";
import Preloader from "../commons/Preloader/Preloader";
import Users from './Users';

const UsersContainer: React.FC<UsersContainerStateToPropsType & UsersContainerDispatchToPropsType 
& UserContainerOwnPropsType> = ({getUsers, pageCount, activePage,
   isPreloader, totalUsers, users, isToggleFollow,
  toggleFollow, toggleUnFollow }) => {

    React.useEffect(() => {
      getUsers(activePage, pageCount)
  },[activePage,pageCount])

  const setCurrentPage = (page:number) => {
    getUsers(page, pageCount)
   }
   
      return <>
      {isPreloader ? <Preloader /> 
      : <Users totalUsers = {totalUsers} pageCount={pageCount} activePage={activePage}
      users = {users} setCurrentPage = {setCurrentPage} isToggleFollow= {isToggleFollow} 
      toggleFollow={toggleFollow} toggleUnFollow={toggleUnFollow}
     />} 
      </>
}



let mapPropsToState = (state : AppStateType) => {
  return {
    users: getUsersSelector(state),
    pageCount: getPageCountSelector(state),
    totalUsers: getTotalUsersSelector(state),
    activePage: getActivePageSelector(state),
    isPreloader: getIsPreloaderSelector(state),
    isToggleFollow: getIsToggleFollowSelector(state)
  }
}

export default compose<React.ComponentType>(connect<UsersContainerStateToPropsType, UsersContainerDispatchToPropsType,
  {}, AppStateType>
  (mapPropsToState, { getUsers, toggleFollow, toggleUnFollow} ),
withAuthRedirect)(UsersContainer)



type UsersContainerStateToPropsType = {
  users : Array<UserResponseType>
  pageCount : number 
  totalUsers : number
  activePage : number
  isPreloader : boolean
  isToggleFollow : Array<number>
}

type UsersContainerDispatchToPropsType = {
  getUsers : (activePage : number, pageCount : number) => void
  toggleFollow : (userId: number) => void
  toggleUnFollow : (userId: number) => void
}


export type UserContainerOwnPropsType = {
  setCurrentPage: (page : number) => void
}
