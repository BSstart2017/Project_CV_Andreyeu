import { stopSubmit } from "redux-form"
import { userAPI } from "../api/api"

const SET_LOGIN_USER = "auth/Aliaksandr_Andreyeu/SET_LOGIN_USER"

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

export const getAuthUser = () => async dispatch => {
  const response = await userAPI.authUser()
    if (response.resultCode === 0){
      dispatch(setLoginUser(response.data.id, response.data.login, response.data.email, true))
    }
}

export const getLogin = (email, password, rememberMe) => async dispatch => {
  const response = await userAPI.login(email, password, rememberMe)
    if (response.resultCode === 0){
      dispatch(getAuthUser())
    } else {
     let message = response.messages.length > 0 ?  response.messages[0] : "Some error";
      dispatch(stopSubmit("Login", {_error: message}))
    }
}

export const getLogout = () => async (dispatch) => {
  const response = await userAPI.logout()
    if (response.resultCode === 0){
      dispatch(setLoginUser(null, null, null, false))
    }
}

export default authReducer;
