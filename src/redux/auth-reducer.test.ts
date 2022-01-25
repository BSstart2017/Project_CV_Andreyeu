import authApi, {LoginResponseDataType, MeResponseDataType} from "../api/auth-api";
import {ApiResponseType, ResultCodeCaptchaEnum, ResultCodeEnum} from "../api/api";
import authReducer, {actionsAuth, defaultStateType, getAuthUser, getCaptchaUrl, getLogin, getLogout} from "./auth-reducer";
import securityApi, {CaptchaResponseType} from "../api/security-api";
import {stopSubmit} from "redux-form";

jest.mock('../api/auth-api')
jest.mock('../api/security-api')
const authApiMock = authApi as jest.Mocked<typeof authApi>;
const securityApiMock = securityApi as jest.Mocked<typeof securityApi>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn()

let state = {
  id : null as null | number,
  login : null as  null | string,
  email : null  as  null | string,
  isLogin : false,
  captcha: null  as  null | string
} as defaultStateType

const resultGetAuthUser:ApiResponseType<MeResponseDataType> = {
  resultCode: ResultCodeEnum.Success,
  data:{
    id: 1,
    email: 'Nicepk.by@gmail.com',
    login: 'Missio'
  },
  messages: []
}
const resultGetAuthUserError:ApiResponseType<MeResponseDataType> = {
  resultCode: ResultCodeEnum.Error,
  data:{
    id: 1,
    email: 'Nicepk.by@gmail.com',
    login: 'Missio'
  },
  messages: ['MessageError']
}
const resultGetLogin:ApiResponseType<LoginResponseDataType, ResultCodeCaptchaEnum | ResultCodeEnum> = {
  resultCode: ResultCodeEnum.Success,
  data:{
    userId: 1
  },
  messages: []
}
const resultGetLoginError:ApiResponseType<LoginResponseDataType, ResultCodeCaptchaEnum | ResultCodeEnum> = {
  resultCode: ResultCodeEnum.Error,
  data:{
    userId: 1
  },
  messages: ['MessageError']
}
const resultGetLoginCaptcha:ApiResponseType<LoginResponseDataType, ResultCodeCaptchaEnum | ResultCodeEnum> = {
    resultCode: ResultCodeCaptchaEnum.Captcha,
    data:{
        userId: 1
    },
    messages: []
}
const captcha = "https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200\u0026h=100\u0026c=7qBx8Nl0mJGvLPkBzCBNpg%3D%3D"
const resultCaptcha =  {
  url: "https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200\u0026h=100\u0026c=7qBx8Nl0mJGvLPkBzCBNpg%3D%3D"
} as CaptchaResponseType
const resultDelete: ApiResponseType<LoginResponseDataType, ResultCodeCaptchaEnum | ResultCodeEnum> = {
  resultCode: ResultCodeEnum.Success,
  data:{
    userId: 1
  },
  messages: []
}
const resultDeleteError: ApiResponseType<LoginResponseDataType, ResultCodeCaptchaEnum | ResultCodeEnum> = {
  resultCode: ResultCodeEnum.Error,
  data:{
    userId: 1
  },
  messages: []
}

describe('authReducer actions',()=>{
  it('authReducer actions.setAuthUserSuccess', () => {
    let action = actionsAuth.setAuthUserSuccess(1,'Missio','Nicepk.by@gmail.com', true )
    let newState = authReducer(state,action)
    expect(newState.login).toBe('Missio')
  })
  it('authReducer actions.setCaptchaUrlSuccess', () => {
    let action = actionsAuth.setCaptchaUrlSuccess(captcha)
    let newState = authReducer(state,action)
    expect(newState.captcha).toBe(captcha)
  })
})
describe ('authReducer thunk', ()=>{
    describe('authReducer getAuthUser',()=>{
        const thunk = getAuthUser()
        it('authReducer getAuthUser success', async () =>{
            const response = authApiMock.getAuthUser.mockReturnValue(Promise.resolve(resultGetAuthUser))
            await thunk(dispatchMock, getStateMock, {})
            expect(dispatchMock).toBeCalledTimes(1)
            expect(await response().then((data:ApiResponseType<MeResponseDataType>)=>data.resultCode)).toBe(resultGetAuthUser.resultCode)
            expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsAuth.setAuthUserSuccess(1,'Missio','Nicepk.by@gmail.com', true ))
        })
        it('authReducer getAuthUser error', async () =>{
            const response = authApiMock.getAuthUser.mockReturnValue(Promise.resolve(resultGetAuthUserError))
            await thunk(dispatchMock, getStateMock, {})
            expect(dispatchMock).toBeCalledTimes(0)
            expect(await response().then((data)=>data.resultCode)).toBe(resultGetAuthUserError.resultCode)
        })
    })
    describe('authReducer getLogin',()=>{
        const thunkCaptchaUrl = getCaptchaUrl()
        const thunkAuthUser = getAuthUser()
        const thunk = getLogin('Nicepk.by@gmail.com', 'Missio1991', true, captcha)
        it('authReducer getLogin success', async () =>{
            securityApiMock.getCaptchaUrlApi.mockReturnValue(Promise.resolve(resultCaptcha))
            authApiMock.getAuthUser.mockReturnValue(Promise.resolve(resultGetAuthUser))
            authApiMock.postLogin.mockReturnValue(Promise.resolve(resultGetLogin))
            await thunkCaptchaUrl(dispatchMock, getStateMock, {})
            await thunkAuthUser(dispatchMock, getStateMock, {})
            await thunk(dispatchMock, getStateMock, {})
            expect(dispatchMock).toBeCalledTimes(3)
            expect(dispatchMock).toHaveBeenNthCalledWith(2, actionsAuth.setAuthUserSuccess(1,'Missio','Nicepk.by@gmail.com', true ))
            expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsAuth.setCaptchaUrlSuccess(captcha))
        })
        it('authReducer getLogin captcha', async () =>{
            const response = authApiMock.getAuthUser.mockReturnValue(Promise.resolve(resultGetAuthUserError))
            securityApiMock.getCaptchaUrlApi.mockReturnValue(Promise.resolve(resultCaptcha))
            authApiMock.postLogin.mockReturnValue(Promise.resolve(resultGetLoginCaptcha))
            await thunkCaptchaUrl(dispatchMock, getStateMock, {})
            await thunkAuthUser(dispatchMock, getStateMock, {})
            await thunk(dispatchMock, getStateMock, {})
            expect(dispatchMock).toBeCalledTimes(3)
            expect(await response().then((data:ApiResponseType<MeResponseDataType>)=>data.resultCode)).toBe(resultGetAuthUserError.resultCode)
            expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsAuth.setCaptchaUrlSuccess(captcha))
            expect(dispatchMock).toHaveBeenNthCalledWith(3, stopSubmit("Login", {_error: "Some error"}))
        })
        it('authReducer getLogin error', async () =>{
            const response = authApiMock.getAuthUser.mockReturnValue(Promise.resolve(resultGetAuthUser))
            authApiMock.postLogin.mockReturnValue(Promise.resolve(resultGetLoginError))
            securityApiMock.getCaptchaUrlApi.mockReturnValue(Promise.resolve(resultCaptcha))
            await thunkCaptchaUrl(dispatchMock, getStateMock, {})
            await thunkAuthUser(dispatchMock, getStateMock, {})
            await thunk(dispatchMock, getStateMock, {})
            expect(dispatchMock).toBeCalledTimes(3)
            expect(await response().then((data:ApiResponseType<MeResponseDataType>)=>data.resultCode)).toBe(resultGetAuthUser.resultCode)
            expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsAuth.setCaptchaUrlSuccess(captcha))
            expect(dispatchMock).toHaveBeenNthCalledWith(3, stopSubmit("Login", {_error: 'MessageError'}))
        })
    })
    describe('authReducer getLogout', ()=>{
        const thunk = getLogout()
        it('authReducer getLogout success', async () =>{
            authApiMock.deleteLogout.mockReturnValue(Promise.resolve(resultDelete))
            await thunk(dispatchMock, getStateMock, {})
            expect(dispatchMock).toBeCalledTimes(1)
            expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsAuth.setAuthUserSuccess(null, null, null, false))
        })
        it('authReducer getLogout error', async () =>{
            authApiMock.deleteLogout.mockReturnValue(Promise.resolve(resultDeleteError))
            await thunk(dispatchMock, getStateMock, {})
            expect(dispatchMock).toBeCalledTimes(0)
        })
    })
  it('authReducer getCaptchaUrl', async () =>{
    securityApiMock.getCaptchaUrlApi.mockReturnValue(Promise.resolve(resultCaptcha))
    const thunk = getCaptchaUrl()
    await thunk(dispatchMock, getStateMock, {})
    expect(dispatchMock).toBeCalledTimes(1)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actionsAuth.setCaptchaUrlSuccess(captcha))
  })
})


