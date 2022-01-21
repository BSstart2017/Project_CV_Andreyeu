import { AppStateType } from "../store"

export const getUsersSelector = (state: AppStateType) => state.usersReducer.users
export const getPageCountSelector = (state: AppStateType) => state.usersReducer.pageCount
export const getTotalUsersSelector = (state: AppStateType) => state.usersReducer.totalUsers
export const getActivePageSelector = (state: AppStateType) => state.usersReducer.activePage
export const getIsPreloaderSelector = (state: AppStateType) => state.usersReducer.isPreloader
export const getIsToggleFollowSelector = (state: AppStateType) => state.usersReducer.isToggleFollow
export const getFilterUsersSelector = (state: AppStateType) => state.usersReducer.filter
export const getFriendsUsersSelector = (state: AppStateType) => state.usersReducer.usersFriends

