import { userAPI } from "../api/api"
import { updateObjectInArray } from "../utils/objectHelper"

const FOLLOW = "users/Aliaksandr_Andreyeu/FOLLOW"
const UNFOLLOW = "users/Aliaksandr_Andreyeu/UNFOLLOW"
const SET_USERS = "users/Aliaksandr_Andreyeu/SET_USERS"
const TOTAL_USERS = "users/Aliaksandr_Andreyeu/TOTAL_USERS"
const ACTIVE_PAGE = "users/Aliaksandr_Andreyeu/ACTIVE_PAGE"
const IS_PRELOADER = "users/Aliaksandr_Andreyeu/IS_PRELOADER"
const IS_TOGGLE_FOLLOW = "users/Aliaksandr_Andreyeu/IS_TOGGLE_FOLLOW"

let defaultState = {
  users: [],
  pageCount: 10,
  totalUsers: 0,
  activePage: 1,
  isPreloader: false,
  isToggleFollow:[]
}

const usersReducer = (state = defaultState, action) => {
  switch (action.type){
    case FOLLOW:
      return {...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true} )
      }
    case UNFOLLOW:
      return {...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false} )
      }
    case SET_USERS:
        return {...state, users: [...action.users] }
    case TOTAL_USERS:
          return {...state, totalUsers: action.totalUsers }
    case ACTIVE_PAGE:
        return {...state, activePage: action.activePage }
    case IS_PRELOADER:
        return {...state, isPreloader: action.isPreloader }
    case IS_TOGGLE_FOLLOW:
        return {...state, 
          isToggleFollow: action.isToggle ? [...state.isToggleFollow, action.id]
        : state.isToggleFollow.filter(id => id !== action.id) }
    default:
      return state
  }
}
 
export const follow = (userId) => ({type : FOLLOW, userId})
export const unfollow = (userId) => ({type : UNFOLLOW, userId})
export const setUsers = (users) => ({type : SET_USERS, users})
export const setTotalUsers = (totalUsers) => ({type : TOTAL_USERS, totalUsers})
export const setActivePage = (activePage) => ({type : ACTIVE_PAGE, activePage})
export const setIsPreloader = (isPreloader) => ({type : IS_PRELOADER, isPreloader})
export const setIsToggleFollow = (isToggle, id) => ({type : IS_TOGGLE_FOLLOW, isToggle, id})

export const getUsers = (activePage, pageCount) => async (dispatch) => {
      dispatch(setIsPreloader(true))
     const response = await userAPI.getUsers(activePage, pageCount)
        dispatch(setActivePage(activePage))
        dispatch(setUsers(response.items))
        dispatch(setTotalUsers(response.totalCount))
        dispatch(setIsPreloader(false))
}

const toggleFollowUnfollow = async (userId, dispatch, apiHelper, dispatchAction ) => {
  dispatch(setIsToggleFollow(true, userId))
  const response = await apiHelper(userId)
      if(response.resultCode === 0){
        dispatch(dispatchAction(userId))
      }
      dispatch(setIsToggleFollow(false, userId))
}

export const toggleUnFollow = (userId) => async (dispatch) => 
toggleFollowUnfollow(userId, dispatch, userAPI.unFollow, unfollow)


export const toggleFollow = (userId) => async (dispatch) => 
toggleFollowUnfollow(userId,dispatch, userAPI.follow, follow )


export default usersReducer;
