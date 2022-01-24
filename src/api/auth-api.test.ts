import authApi, {LoginResponseDataType, MeResponseDataType} from './auth-api'
import {ApiResponseType, ResultCodeCaptchaEnum, ResultCodeEnum} from "./api";

jest.mock('./auth-api')
const authApiMock = authApi as jest.Mocked<typeof authApi>;

const getAuthUsersResult:ApiResponseType<MeResponseDataType>  = {
    resultCode: 0,
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
        try {
            authApiMock.getAuthUser.mockReturnValue(Promise.resolve(getAuthUsersResult))
            await expect(authApi.getAuthUser()).resolves.toBe(getAuthUsersResult)
        } catch (e) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(e).toEqual({
                error: 'User with 1 not found.',
            });
        }
    })

    it('deleteLogout',async ()=>{
        try {
            authApiMock.deleteLogout.mockReturnValue(Promise.resolve(getDeleteLogoutResult))
            await expect(authApi.deleteLogout()).resolves.toBe(getDeleteLogoutResult)
        } catch (e) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(e).toEqual({
                error: 'User with 1 not found.',
            });
        }
    })
    it('postLogin resultCode === 0',async ()=>{
        try {

            await expect(authApi.postLogin('blabla@bla.bla',
                'Missio1991', false, null)).resolves.toBe(getPostLoginResult)
        } catch (e) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(e).toEqual({
                error: 'User with 1 not found.',
            });
        }
    })
})