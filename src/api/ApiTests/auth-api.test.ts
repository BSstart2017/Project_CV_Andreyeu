import authApi, {LoginResponseDataType, MeResponseDataType, } from '../auth-api'
import {ApiResponseType, ResultCodeCaptchaEnum, ResultCodeEnum} from "../api"

jest.mock('../auth-api')
const authApiMock = authApi as jest.Mocked<typeof authApi>

const getAuthUsersResult:ApiResponseType<MeResponseDataType>  = {
    resultCode: 0,
    messages: [],
    data: {
        id: 2,
        email: 'blabla@bla.bla',
        login: 'samurai'
    }
}
const getAuthUsersResultError:ApiResponseType<MeResponseDataType>  = {
    resultCode: 1,
    messages: [],
    data: {
        id: 2,
        email: 'blabla@bla.bla',
        login: 'samurai'
    }
}
const getDeleteLogoutResult:ApiResponseType<LoginResponseDataType, ResultCodeCaptchaEnum | ResultCodeEnum>  = {
    resultCode: 0,
    messages: [],
    data: {
        userId:1
    }
}
const getPostLoginResult:ApiResponseType<LoginResponseDataType, ResultCodeCaptchaEnum | ResultCodeEnum>  = {
    resultCode: 0,
    messages: [],
    data: {
        userId:1
    }
}

describe('auth-api',()=>{
    it('getAuthUser',async ()=>{
        authApiMock.getAuthUser.mockReturnValue(Promise.resolve(getAuthUsersResult))
        const response = await authApi.getAuthUser().then((response) => response)
        expect(authApi.getAuthUser).toBeCalledTimes(1)
    })
    it('getAuthUser error',async ()=>{
        authApiMock.getAuthUser.mockReturnValue(Promise.resolve(getAuthUsersResultError))
        const response = await authApi.getAuthUser().then(data=>data)
        expect(response).toBe(getAuthUsersResultError)
        expect(authApi.getAuthUser).toBeCalledTimes(1)
    })
    it('deleteLogout',async ()=>{
        const response = authApiMock.deleteLogout.mockReturnValue(Promise.resolve(getDeleteLogoutResult))
        expect(await response().then(data=>data.resultCode)).toBe(getDeleteLogoutResult.resultCode)
    })
    it('postLogin resultCode === 0',async ()=>{
        authApiMock.postLogin.mockReturnValue(Promise.resolve(getPostLoginResult))
        const response = await authApi.postLogin('blabla@bla.bla',
            'Missio1991', false, null)
        expect(response.resultCode).toBe(getPostLoginResult.resultCode)
        expect(response.data.userId).toBe(getPostLoginResult.data.userId)
        expect(response.messages).toBe(getPostLoginResult.messages)
    })
})