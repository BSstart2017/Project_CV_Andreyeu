import { AppStateType } from "../store"

export const getIsLoginSelector = (state: AppStateType) => {
    return state.authReducer.isLogin
}

export const getCaptchaSelector = (state: AppStateType) => {
    return state.authReducer.captcha
}

export const getLoginSelector = (state: AppStateType) => {
    return state.authReducer.login
}


