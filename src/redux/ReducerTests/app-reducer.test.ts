import appReducer, {actions, defaultStateType, initializedApp} from "../app-reducer";
import authApi, {MeResponseDataType} from "../../api/auth-api";
import {ApiResponseType, ResultCodeEnum} from "../../api/api";
import {getAuthUser} from "../auth-reducer";

jest.mock('../../api/auth-api')
const authApiMock = authApi as jest.Mocked<typeof authApi>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn()

let state = {
    initialized : false,
    collapsed: false
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

describe('appReducer actions',()=>{
    it('appReducer actions.setToggleCollapsed', () => {
        let action = actions.setToggleCollapsed(true)
        let newState = appReducer(state,action)
        expect(newState.collapsed).toBe(true)
    })
    it('appReducer actions.setInitialized', () => {
        let action = actions.setInitialized()
        let newState = appReducer(state,action)
        expect(newState.initialized).toBe(true)
    })
})

describe ('appReducer thunk', ()=>{

    it('appReducer initializedApp', async () =>{
        try {
            const thunkgetAuthUser = getAuthUser()
            authApiMock.getAuthUser.mockReturnValue(Promise.resolve(resultGetAuthUser))
            await thunkgetAuthUser(dispatchMock, getStateMock, {})
            const thunk = initializedApp()
            await thunk(dispatchMock, getStateMock, {})
            expect(dispatchMock).toBeCalledTimes(3)
            expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setInitialized())
        } catch (e) {
            // eslint-disable-next-line jest/no-conditional-expect
              expect(e).toBe({});
        }
    })

})


