import { AppStateType } from "../store"

export const getUsersSelector = (state: AppStateType) => {
    return state.usersReducer.users
} 

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

export const getFilterUsersSelector = (state: AppStateType) => {
    return state.usersReducer.filter
}
