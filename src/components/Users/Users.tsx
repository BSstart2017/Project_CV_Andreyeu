import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserResponseType } from "../../api/users-api";
import { getActivePageSelector, getFilterUsersSelector, getIsPreloaderSelector, 
  getIsToggleFollowSelector, getPageCountSelector, getTotalUsersSelector, 
  getUsersSelector } from "../../redux/Selectors/usersSelectors";
import { getUsers, toggleFollow, toggleUnFollow } from "../../redux/users-reducer";
import Paginator from "../commons/Paginator/Paginator";
import Preloader from "../commons/Preloader/Preloader";
import User from "./User";
import UserForm, { UserFilterFormDataType } from "./UserForm";

export const Users: React.FC = React.memo(() => {

  const users = useSelector(getUsersSelector)
  const pageCount = useSelector(getPageCountSelector)
  const totalUsers = useSelector(getTotalUsersSelector)
  const activePage = useSelector(getActivePageSelector)
  const isPreloader = useSelector(getIsPreloaderSelector)
  const isToggleFollow = useSelector(getIsToggleFollowSelector)
  const filter = useSelector(getFilterUsersSelector)

  const dispatch = useDispatch()
  
  React.useEffect(() => {
    dispatch(getUsers(activePage, pageCount, filter))
  }, [])

  const setCurrentPage = (page: number) => {
    dispatch(getUsers(page, pageCount, filter))
  }

  const onFilterChange = (filter: UserFilterFormDataType) => {
    dispatch(getUsers(1, pageCount, filter))
  }

  const onToggleFollow = (userId: number) => {
    dispatch(toggleFollow(userId))
  }

  const onToggleUnFollow = (userId: number) => {
    dispatch(toggleUnFollow(userId))
  }

  return (
    <>
      {
      isPreloader ? <Preloader /> 
      :<><Paginator totalUsers={totalUsers} pageCount={pageCount} activePage={activePage} setCurrentPage={setCurrentPage}/>
      <UserForm onFilterChange={onFilterChange}/>
      {users.map((el:UserResponseType) => (
        <User
          user={el}
          isToggleFollow={isToggleFollow}
          toggleUnFollow={onToggleUnFollow}
          toggleFollow={onToggleFollow}
          key={el.id}
        />
      ))}
      </>
      }
    </>
  );
})

