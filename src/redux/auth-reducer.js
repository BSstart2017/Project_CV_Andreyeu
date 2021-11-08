import { userAPI } from "../api/api"

const SET_LOGIN_USER = "SET_LOGIN_USER"


let defaultState = {
  id : null,
  login : null,
  email : null,
  isLogin : false
}

const authReducer = (state = defaultState, action) => {
  switch (action.type){
    case SET_LOGIN_USER:
      return {...state,
       ...action.data,
       isLogin : true
      }

    default:
      return state
  }
}

 
export const setLoginUser = (id, login, email) => ({type : SET_LOGIN_USER, data: {id, login, email}})

export const getAuthUser = () => (dispatch) => {
  userAPI.authUser().then(data=> {
    if (data.resultCode === 0){
      dispatch(setLoginUser(data.data.id, data.data.login, data.data.email))
    }
  })
}

export default authReducer;
