const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const TOTAL_USERS = "TOTAL_USERS"
const ACTIVE_PAGE = "ACTIVE_PAGE"

let defaultState = {
  users: [],
  pageCount: 10,
  totalUsers: 0,
  activePage: 1
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
          return {...state, totalUsers: [action.totalUsers] }
    case ACTIVE_PAGE:
        return {...state, activePage: [action.activePage] }
    default:
      return state
  }
}
 
export const followAC = (userId) => ({type : FOLLOW, userId})
export const unfollowAC = (userId) => ({type : UNFOLLOW, userId})
export const setUsersAC = (users) => ({type : SET_USERS, users})
export const totalUsersAC = (totalUsers) => ({type : TOTAL_USERS, totalUsers})
export const activePageAC = (activePage) => ({type : ACTIVE_PAGE, activePage})

export default usersReducer;
