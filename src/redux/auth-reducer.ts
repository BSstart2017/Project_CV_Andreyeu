import { FormAction, stopSubmit } from "redux-form"
import { ResultCodeEnum,ResultCodeCaptchaEnum } from "../api/api"
import authApi from "../api/auth-api"
import securityApi from "../api/security-api"
import { BaseThunkType, InferActionType } from "./store"

let defaultState = {
  id : null as null | number,
  login : null as  null | string,
  email : null  as  null | string,
  isLogin : false,
  captcha: null  as  null | string
}

const authReducer = (state = defaultState, action: ActionType) : defaultStateType  => {
  switch (action.type){
    case "auth/Aliaksandr_Andreyeu/SET_LOGIN_USER_SUCCESS":
    case 'auth/Aliaksandr_Andreyeu/SET_CAPTCHA_URL_SUCCESS':
      return {...state,
       ...action.data
      }

    default:
      return state
  }
}


export const actions = {
  setAuthUserSuccess: (id: number | null, login: string | null, email: string | null, isLogin: boolean)  => 
  ({type : 'auth/Aliaksandr_Andreyeu/SET_LOGIN_USER_SUCCESS', data: {id, login, email, isLogin}} as const) ,
  setCaptchaUrlSuccess: (captcha : string) => ({type : 'auth/Aliaksandr_Andreyeu/SET_CAPTCHA_URL_SUCCESS', data: {captcha}} as const)
}


export const getAuthUser = () : ThunkType => async (dispatch)=> {
  const response = await authApi.getAuthUser()
    if (response.resultCode === ResultCodeEnum.Success){
      dispatch(actions.setAuthUserSuccess(response.data.id, response.data.login, response.data.email, true))
    }
}

export const getLogin = (email : string, password: string, rememberMe: boolean, captcha: any) : ThunkType => async (dispatch) => {
  const response = await authApi.postLogin(email, password, rememberMe, captcha)
    if (response.resultCode === ResultCodeEnum.Success){
      dispatch(getAuthUser())
    } else {
      if(response.resultCode === ResultCodeCaptchaEnum.Captcha){
        dispatch(getCaptchaUrl())
      }
     let message = response.messages.length > 0 ?  response.messages[0] : "Some error";
      dispatch(stopSubmit("Login", {_error: message}))
    }
}

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
    const response = await securityApi.getCaptchaUrlApi()
      dispatch(actions.setCaptchaUrlSuccess(response.url))
}

export const getLogout = (): ThunkType => async (dispatch) => {
  const response = await authApi.deleteLogout()
    if (response.resultCode === ResultCodeEnum.Success){
      dispatch(actions.setAuthUserSuccess(null, null, null, false))
    }
}

export default authReducer;


type defaultStateType =  typeof defaultState
type ActionType = InferActionType<typeof actions>
type ThunkType = BaseThunkType<ActionType | FormAction>