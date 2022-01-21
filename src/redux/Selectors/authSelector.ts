import { AppStateType } from "../store"

export const getIsLoginSelector = (state: AppStateType) => state.authReducer.isLogin
export const getCaptchaSelector = (state: AppStateType) => state.authReducer.captcha
export const getLoginSelector = (state: AppStateType) => state.authReducer.login
export const getIdSelector = (state: AppStateType) => state.authReducer.id


