import { Dispatch } from "redux"
import { ResultCodeEnum } from "../api/api"
import { updateObjectInArray } from "../utils/helper/objectHelper"
import { BaseThunkType, InferActionType } from "./store"
import userAPI, {UserResponseType} from "./../api/users-api"

let defaultState = {
  users: [] as Array<UserResponseType>,
  pageCount: 10,
  totalUsers: 0,
  activePage: 1,
  isPreloader: false,
  isToggleFollow:[] as Array<number> // array of users ids
}

const usersReducer = (state = defaultState, action : ActionType) : DefaultStateType => {
  switch (action.type){
    case "users/Aliaksandr_Andreyeu/FOLLOW":
      return {...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true} )
      }
    case "users/Aliaksandr_Andreyeu/UNFOLLOW":
      return {...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false} )
      }
    case "users/Aliaksandr_Andreyeu/SET_USERS":
        return {...state, users: [...action.users] }
    case "users/Aliaksandr_Andreyeu/TOTAL_USERS":
          return {...state, totalUsers: action.totalUsers }
    case "users/Aliaksandr_Andreyeu/ACTIVE_PAGE":
        return {...state, activePage: action.activePage }
    case "users/Aliaksandr_Andreyeu/IS_PRELOADER":
        return {...state, isPreloader: action.isPreloader }
    case "users/Aliaksandr_Andreyeu/IS_TOGGLE_FOLLOW":
        return {...state, 
          isToggleFollow: action.isToggle ? [...state.isToggleFollow, action.id]
        : state.isToggleFollow.filter(id => id !== action.id) }
    default:
      return state
  }
}

export const actions = {
  follow: (userId : number) => ({type : 'users/Aliaksandr_Andreyeu/FOLLOW', userId} as const),
  unfollow: (userId : number) => ({type : 'users/Aliaksandr_Andreyeu/UNFOLLOW', userId} as const),
  setUsers: (users : Array<UserResponseType>) => ({type : 'users/Aliaksandr_Andreyeu/SET_USERS', users} as const),
  setTotalUsers: (totalUsers : number) => ({type : 'users/Aliaksandr_Andreyeu/TOTAL_USERS', totalUsers} as const),
  setActivePage: (activePage : number) => ({type : 'users/Aliaksandr_Andreyeu/ACTIVE_PAGE', activePage} as const),
  setIsPreloader: (isPreloader : boolean) => ({type : 'users/Aliaksandr_Andreyeu/IS_PRELOADER', isPreloader} as const),
  setIsToggleFollow: (isToggle: boolean, id : number) => ({type : 'users/Aliaksandr_Andreyeu/IS_TOGGLE_FOLLOW', isToggle, id} as const)
}

export const getUsers = (activePage : number, pageCount: number) : ThunkType => async (dispatch) => {
      dispatch(actions.setIsPreloader(true))
     const response = await userAPI.getUsers(activePage, pageCount)
        dispatch(actions.setActivePage(activePage))
        dispatch(actions.setUsers(response.items))
        dispatch(actions.setTotalUsers(response.totalCount))
        dispatch(actions.setIsPreloader(false))
}

const _toggleFollowUnfollow = async (userId: number , dispatch : Dispatch<ActionType>, apiHelper : any, dispatchAction : (userId : number) => ActionType ) => {
  dispatch(actions.setIsToggleFollow(true, userId))
  const response = await apiHelper(userId)
      if(response.resultCode === ResultCodeEnum.Success){
        dispatch(dispatchAction(userId))
      }
      dispatch(actions.setIsToggleFollow(false, userId))
}

export const toggleUnFollow = (userId : number ): ThunkType => async (dispatch) => 
_toggleFollowUnfollow(userId, dispatch, userAPI.deleteUnFollow, actions.unfollow)


export const toggleFollow = (userId : number): ThunkType => async (dispatch) => 
_toggleFollowUnfollow(userId,dispatch, userAPI.postFollow, actions.follow )


export default usersReducer;


type DefaultStateType = typeof defaultState
type ActionType = InferActionType<typeof actions>
type ThunkType = BaseThunkType<ActionType>