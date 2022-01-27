import {ApiResponseType, ResultCodeEnum} from "../../api/api";
import userAPI, {UserResponseType, UsersResponseDataType} from "../../api/users-api";
import usersReducer, {
    actions,
    DefaultStateType,
    getFriendsUsers,
    getUsers,
    toggleFollow,
    toggleUnFollow
} from "../users-reducer";
import {UserFilterFormDataType} from "../../components/Users/UserForm";

jest.mock('../../api/users-api')

const userAPIMock = userAPI as jest.Mocked<typeof userAPI>;

const dispatchMock = jest.fn();
const getStateMock = jest.fn()

let state = {
    users: [
        {name: "Shubert", id: 1, photos: {small: null, large: null}, status: null, followed: false},
        {name: "Hacker", id: 2, photos: {small: null, large: null}, status: null, followed: false},
        {id: 3, status: null, name:"Missio", followed: true, photos:{small: null, large: null}},
    ] as Array<UserResponseType>,
    usersFriends: [] as Array<UserResponseType>,
    pageCount: 10,
    totalUsers: 0,
    activePage: 1,
    isPreloader: false,
    isToggleFollow:[1] as Array<number>, // array of users ids
    filter: {
        term: '',
        friend: null
    } as UserFilterFormDataType
} as DefaultStateType

const resultGetUserSuccess : UsersResponseDataType = {
    items: [
        {name: "Shubert", id: 1, photos: {small: null, large: null}, status: null, followed: false},
        {name: "Hacker", id: 2, photos: {small: null, large: null}, status: null, followed: false},
        {id: 3, status: null, name:"Missio", followed: true, photos:{small: null, large: null}},
    ],
        Items: {name: "Shubert", id: 1, photos: {small: null, large: null}, status: null, followed: false},
        totalCount: 3,
        error: '',

}
const resultSuccess : ApiResponseType = {
    resultCode: ResultCodeEnum.Success,
    data:{},
    messages:[]
}
const resultError : ApiResponseType = {
    resultCode: ResultCodeEnum.Error,
    data:{},
    messages:['Messages error']
}

describe('usersReducer actions',()=>{
  it('usersReducer actions.follow', () => {
    let action = actions.follow(2 )
    let newState = usersReducer(state,action)
    expect(newState.users[1].followed).toBe(true)
  })
    it('usersReducer actions.unfollow', () => {
    let action = actions.unfollow(1 )
    let newState = usersReducer(state,action)
    expect(newState.users[0].followed).toBe(false)
  })
    it('usersReducer actions.setUsers', () => {
        let action = actions.setUsers( [
            {name: "Shubert", id: 1, photos: {small: null, large: null}, status: null, followed: false}] )
        let newState = usersReducer(state,action)
        expect(newState.users.length).toBe(1)
    })
    it('usersReducer actions.setTotalUsers', () => {
        let action = actions.setTotalUsers(1)
        let newState = usersReducer(state,action)
        expect(newState.totalUsers).toBe(1)
    })
    it('usersReducer actions.setActivePage', () => {
        let action = actions.setActivePage(1)
        let newState = usersReducer(state,action)
        expect(newState.activePage).toBe(1)
    })
    it('usersReducer actions.setIsPreloader', () => {
        let action = actions.setIsPreloader(true)
        let newState = usersReducer(state,action)
        expect(newState.isPreloader).toBe(true)
    })
    describe('usersReducer actions.setIsToggleFollow', ()=>{
        it('usersReducer actions.setIsToggleFollow true', () => {
            let action = actions.setIsToggleFollow(true, 2)
            let newState = usersReducer(state,action)
            expect(newState.isToggleFollow[1]).toBe(2)
        })
        it('usersReducer actions.setIsToggleFollow false', () => {
            let action = actions.setIsToggleFollow(false, 2)
            let newState = usersReducer(state,action)
            expect(newState.isToggleFollow.length).toBe(1)
        })
    })
    it('usersReducer actions.setFilterUsers', () => {
        let action = actions.setFilterUsers({term: '', friend: null})
        let newState = usersReducer(state,action)
        expect(newState.filter.term).toBe('')
        expect(newState.filter.friend).toBe(null)
    })
    it('usersReducer actions.setNextFriendsUsers', () => {
        let action = actions.setNextFriendsUsers([{name: "Shubert", id: 1, photos: {small: null, large: null}, status: null, followed: false}])
        let newState = usersReducer(state,action)
        expect(newState.usersFriends[0].id).toBe(1)
    })
    it('usersReducer actions.setNullNextFriendsUsers', () => {
        let action = actions.setNullNextFriendsUsers()
        let newState = usersReducer(state,action)
        expect(newState.usersFriends.length).toBe(0)
    })
})

describe ('userAPIMock thunk', ()=>{
    it('userAPIMock getUsers success', async () =>{
        userAPIMock.getUsers.mockReturnValue(Promise.resolve(resultGetUserSuccess))
        const thunk = getUsers(1, 3, {term: '', friend: null})
        await thunk(dispatchMock, getStateMock, {})
        expect(dispatchMock).toBeCalledTimes(6)
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setIsPreloader(true))
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setFilterUsers({term: '', friend: null}))
        expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setActivePage(1))
        expect(dispatchMock).toHaveBeenNthCalledWith(4, actions.setUsers(resultGetUserSuccess.items))
        expect(dispatchMock).toHaveBeenNthCalledWith(5, actions.setTotalUsers(resultGetUserSuccess.totalCount))
        expect(dispatchMock).toHaveBeenNthCalledWith(6, actions.setIsPreloader(false))
    })
    it('userAPIMock getFriendsUsers success', async () =>{
        userAPIMock.getUsers.mockReturnValue(Promise.resolve(resultGetUserSuccess))
        const thunk = getFriendsUsers(1, 3, {term: '', friend: true})
        await thunk(dispatchMock, getStateMock, {})
        expect(dispatchMock).toBeCalledTimes(4)
        expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setIsPreloader(true))
        expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setNextFriendsUsers(resultGetUserSuccess.items))
        expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.setTotalUsers(resultGetUserSuccess.totalCount))
        expect(dispatchMock).toHaveBeenNthCalledWith(4, actions.setIsPreloader(false))
    })
    describe('userAPIMock _toggleFollowUnfollow',()=>{
        it('userAPIMock toggleUnFollow success', async () =>{
            userAPIMock.deleteUnFollow.mockReturnValue(Promise.resolve(resultSuccess))
            const thunk = toggleUnFollow(3)
            await thunk(dispatchMock, getStateMock, {})
            expect(dispatchMock).toBeCalledTimes(3)
            expect(dispatchMock).toHaveBeenNthCalledWith(1,actions.setIsToggleFollow(true, 3))
            expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollow( 3))
            expect(dispatchMock).toHaveBeenNthCalledWith(3,actions.setIsToggleFollow(false, 3))
        })
        it('userAPIMock toggleUnFollow error', async () =>{
            userAPIMock.deleteUnFollow.mockReturnValue(Promise.resolve(resultError))
            const thunk = toggleUnFollow(3)
            await thunk(dispatchMock, getStateMock, {})
            expect(dispatchMock).toBeCalledTimes(2)
            expect(dispatchMock).toHaveBeenNthCalledWith(1,actions.setIsToggleFollow(true, 3))
            expect(dispatchMock).toHaveBeenNthCalledWith(2,actions.setIsToggleFollow(false, 3))
        })
        it('userAPIMock toggleFollow success', async () =>{
            userAPIMock.postFollow.mockReturnValue(Promise.resolve(resultSuccess))
            const thunk = toggleFollow(1)
            await thunk(dispatchMock, getStateMock, {})
            expect(dispatchMock).toBeCalledTimes(3)
            expect(dispatchMock).toHaveBeenNthCalledWith(1,actions.setIsToggleFollow(true, 1))
            expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.follow( 1))
            expect(dispatchMock).toHaveBeenNthCalledWith(3,actions.setIsToggleFollow(false, 1))
        })
        it('userAPIMock toggleFollow error', async () =>{
            userAPIMock.postFollow.mockReturnValue(Promise.resolve(resultError))
            const thunk = toggleFollow(1)
            await thunk(dispatchMock, getStateMock, {})
            expect(dispatchMock).toBeCalledTimes(2)
            expect(dispatchMock).toHaveBeenNthCalledWith(1,actions.setIsToggleFollow(true, 1))
            expect(dispatchMock).toHaveBeenNthCalledWith(2,actions.setIsToggleFollow(false, 1))
        })
    })
})


