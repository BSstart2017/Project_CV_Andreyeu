import { createSelector } from "reselect"

const getUsers = (state) => {
    return state.usersReducer.users
}

export const getUsersSelector = createSelector(getUsers,(users) => {
    return users   // superSelector
}) 

export const getPageCountSelector = (state) => {
    return state.usersReducer.pageCount
}

export const getTotalUsersSelector = (state) => {
    return state.usersReducer.totalUsers
}

export const getActivePageSelector = (state) => {
    return state.usersReducer.activePage
}

export const getIsPreloaderSelector = (state) => {
    return state.usersReducer.isPreloader
}

export const getIsToggleFollowSelector = (state) => {
    return state.usersReducer.isToggleFollow
}