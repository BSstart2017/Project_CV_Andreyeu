import {Dispatch} from "redux"
import {ApiResponseType, ResultCodeEnum} from "../api/api"
import {updateObjectInArray} from "../utils/helper/objectHelper"
import {BaseThunkType, InferActionType} from "./store"
import userAPI, {UserResponseType} from "../api/users-api"
import {UserFilterFormDataType} from "../components/Users/UserForm"

let defaultState = {
    users: [] as Array<UserResponseType>,
    usersFriends: [] as Array<UserResponseType>,
    pageCount: 10,
    totalUsers: 0,
    activePage: 1,
    isPreloader: false,
    isToggleFollow: [] as Array<number>, // array of users ids
    filter: {
        term: '',
        friend: null
    } as UserFilterFormDataType
}

const usersReducer = (state = defaultState, action: ActionType): DefaultStateType => {
    switch (action.type) {
        case "users/Aliaksandr_Andreyeu/FOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case "users/Aliaksandr_Andreyeu/UNFOLLOW":
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case "users/Aliaksandr_Andreyeu/SET_USERS":
            return {...state, users: [...action.users]}
        case "users/Aliaksandr_Andreyeu/TOTAL_USERS":
            return {...state, totalUsers: action.totalUsers}
        case "users/Aliaksandr_Andreyeu/ACTIVE_PAGE":
            return {...state, activePage: action.activePage}
        case "users/Aliaksandr_Andreyeu/IS_PRELOADER":
            return {...state, isPreloader: action.isPreloader}
        case "users/Aliaksandr_Andreyeu/IS_TOGGLE_FOLLOW":
            return {
                ...state,
                isToggleFollow: action.isToggle ? [...state.isToggleFollow, action.id]
                    : state.isToggleFollow.filter(id => id !== action.id)
            }
        case "users/Aliaksandr_Andreyeu/FILTERS_USERS":
            return {
                ...state,
                filter: action.filter
            }
        case "users/Aliaksandr_Andreyeu/NEXT_FRIENDS_USERS":
            return {
                ...state,
                usersFriends: [...state.usersFriends, ...action.users]
            }
        case "users/Aliaksandr_Andreyeu/NULL_NEXT_FRIENDS_USERS":
            return {
                ...state,
                usersFriends: []
            }
        default:
            return state
    }
}

export const actions = {
    follow: (userId: number) => ({type: 'users/Aliaksandr_Andreyeu/FOLLOW', userId} as const),
    unfollow: (userId: number) => ({type: 'users/Aliaksandr_Andreyeu/UNFOLLOW', userId} as const),
    setUsers: (users: Array<UserResponseType>) => ({type: 'users/Aliaksandr_Andreyeu/SET_USERS', users} as const),
    setTotalUsers: (totalUsers: number) => ({type: 'users/Aliaksandr_Andreyeu/TOTAL_USERS', totalUsers} as const),
    setActivePage: (activePage: number) => ({type: 'users/Aliaksandr_Andreyeu/ACTIVE_PAGE', activePage} as const),
    setIsPreloader: (isPreloader: boolean) => ({type: 'users/Aliaksandr_Andreyeu/IS_PRELOADER', isPreloader} as const),
    setIsToggleFollow: (isToggle: boolean, id: number) => ({
        type: 'users/Aliaksandr_Andreyeu/IS_TOGGLE_FOLLOW',
        isToggle,
        id
    } as const),
    setFilterUsers: (filter: UserFilterFormDataType) => ({
        type: "users/Aliaksandr_Andreyeu/FILTERS_USERS",
        filter
    } as const),
    setNextFriendsUsers: (users: Array<UserResponseType>) => ({
        type: "users/Aliaksandr_Andreyeu/NEXT_FRIENDS_USERS",
        users
    } as const),
    setNullNextFriendsUsers: () => ({type: "users/Aliaksandr_Andreyeu/NULL_NEXT_FRIENDS_USERS"} as const),
}

export const getUsers = (activePage: number, pageCount: number, filter: UserFilterFormDataType): ThunkType => async (dispatch) => {
    dispatch(actions.setIsPreloader(true))
    const response = await userAPI.getUsers(activePage, pageCount, filter)
    dispatch(actions.setFilterUsers(filter))
    dispatch(actions.setActivePage(activePage))
    dispatch(actions.setUsers(response.items))
    dispatch(actions.setTotalUsers(response.totalCount))
    dispatch(actions.setIsPreloader(false))
}

export const getFriendsUsers = (activePage: number, pageCount: number, filter: UserFilterFormDataType): ThunkType => async (dispatch) => {
    dispatch(actions.setIsPreloader(true))
    const response = await userAPI.getUsers(activePage, pageCount, filter)
    dispatch(actions.setNextFriendsUsers(response.items))
    dispatch(actions.setTotalUsers(response.totalCount))
    dispatch(actions.setIsPreloader(false))
}

const _toggleFollowUnfollow = async (userId: number, dispatch: Dispatch<ActionType>,
                                     apiHelper: (userId: number) => Promise<ApiResponseType>, dispatchAction: (userId: number) => ActionType) => {
    dispatch(actions.setIsToggleFollow(true, userId))
    const response = await apiHelper(userId)
    if (response.resultCode === ResultCodeEnum.Success) {
        dispatch(dispatchAction(userId))
    }
    dispatch(actions.setIsToggleFollow(false, userId))
}

export const toggleUnFollow = (userId: number): ThunkType => async (dispatch) =>
    await _toggleFollowUnfollow(userId, dispatch, userAPI.deleteUnFollow, actions.unfollow)


export const toggleFollow = (userId: number): ThunkType => async (dispatch) =>
    await _toggleFollowUnfollow(userId, dispatch, userAPI.postFollow, actions.follow)


export default usersReducer;

export type DefaultStateType = typeof defaultState
type ActionType = InferActionType<typeof actions>
type ThunkType = BaseThunkType<ActionType>