import { createSelector } from "reselect"
import { AppStateType } from "../store"

const getUsers = (state: AppStateType) => {
    return state.usersReducer.users
}

export const getUsersSelector = createSelector(getUsers,(users) => {
    return users   // superSelector
}) 

export const getPageCountSelector = (state: AppStateType) => {
    return state.usersReducer.pageCount
}

export const getTotalUsersSelector = (state: AppStateType) => {
    return state.usersReducer.totalUsers
}

export const getActivePageSelector = (state: AppStateType) => {
    return state.usersReducer.activePage
}

export const getIsPreloaderSelector = (state: AppStateType) => {
    return state.usersReducer.isPreloader
}

export const getIsToggleFollowSelector = (state: AppStateType) => {
    return state.usersReducer.isToggleFollow
}