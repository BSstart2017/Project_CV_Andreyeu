import { stopSubmit } from "redux-form"
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
       ...action.data
      }

    default:
      return state
  }
}

 
export const setLoginUser = (id, login, email, isLogin) => ({type : SET_LOGIN_USER, data: {id, login, email, isLogin}})



export const getAuthUser = () => (dispatch) => {
  userAPI.authUser().then(data=> {
    if (data.resultCode === 0){
      dispatch(setLoginUser(data.data.id, data.data.login, data.data.email, true))
    }
  })
}

export const getLogin = (email, password, rememberMe) => (dispatch) => {
  userAPI.login(email, password, rememberMe).then(data=> {
    if (data.resultCode === 0){
      dispatch(getAuthUser())
    } else {
     let message = data.messages.length > 0 ?  data.messages[0] : "Some error";
      dispatch(stopSubmit("Login", {_error: message}))
    }
  })
}

export const getLogout = () => (dispatch) => {
  userAPI.logout().then(data=> {
    if (data.resultCode === 0){
      dispatch(setLoginUser(null, null, null, false))
    }
  })
}

export default authReducer;
