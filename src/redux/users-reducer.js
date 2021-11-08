import { userAPI } from "../api/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const TOTAL_USERS = "TOTAL_USERS"
const ACTIVE_PAGE = "ACTIVE_PAGE"
const IS_PRELOADER = "IS_PRELOADER"
const IS_TOGGLE_FOLLOW = "IS_TOGGLE_FOLLOW"

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
        users: [...state.users.map(el=>el.id===action.userId ? {...el, followed: true} : el)]
      }
    case UNFOLLOW:
      return {...state,
        users: [...state.users.map(el=>el.id===action.userId ? {...el, followed: false} : el)]
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

export const getUsers = (activePage, pageCount) => (dispatch) => {
      dispatch(setIsPreloader(true))
      userAPI.getUsers(activePage, pageCount).then(data=> {
        dispatch(setActivePage(activePage))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsers(data.totalCount))
        dispatch(setIsPreloader(false))
       })
}

export const toggleUnFollow = (userId) => (dispatch) => {
  dispatch(setIsToggleFollow(true, userId))
  userAPI.unFollow(userId).then(data=> {
      if(data.resultCode === 0){
        dispatch(unfollow(userId))
      }
      dispatch(setIsToggleFollow(false, userId))
  })
}

export const toggleFollow = (userId) => (dispatch) => {
  dispatch(setIsToggleFollow(true, userId))
  userAPI.follow(userId).then(data=> {
      if(data.resultCode === 0){
         dispatch(follow(userId))
          }
  dispatch(setIsToggleFollow(false, userId))
                      })
}

export default usersReducer;
