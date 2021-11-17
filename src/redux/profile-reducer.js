import { userAPI } from "../api/api"

const ADD_POST = "profile/Aliaksandr_Andreyeu/ADD-POST"
const SET_PROFILE_USER = "profile/Aliaksandr_Andreyeu/SET_PROFILE_USER"
const SET_PROFILE_STATUS = "profile/Aliaksandr_Andreyeu/SET_PROFILE_STATUS"
const SET_NEW_AVATAR_SUCCESS = "SET_NEW_AVATAR_SUCCESS"

let defaultState = {
  postData: [
    { id: 1, newText: "My one post", col: 3 },
    { id: 2, newText: "Post number two", col: 6 },
    { id: 3, newText: "hi", col: 33 },
    { id: 4, newText: "lol", col: 38 },
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = defaultState, action) => {
  switch (action.type){
    case ADD_POST:
      let newItemPost = {
        id: 5, newText: action.newTextBody, col: 0
      }
      return { ...state, postData: [newItemPost , ...state.postData] }
    case SET_PROFILE_USER:
      return { ...state, profile: action.profile }
    case SET_PROFILE_STATUS:
      return { ...state, status: action.status }
    case SET_NEW_AVATAR_SUCCESS:
      return { ...state, profile: {...state.profile, photos: action.photos} }
    default:
      return state
  }
}
 
export const addPost = (newTextBody) => ({type : ADD_POST, newTextBody})
export const setProfileUser = (profile) => ({type : SET_PROFILE_USER, profile})
export const setProfileStatus = (status) => ({type : SET_PROFILE_STATUS, status})
export const setNewAvatarSuccess = (photos) => ({type : SET_NEW_AVATAR_SUCCESS, photos})

export const getProfileUser = (userId) => async (dispatch) => {
  const response = await userAPI.profileUser(userId)
    dispatch(setProfileUser(response))
}

export const getProfileStatus = (userId) => async (dispatch) => {
  const response = await userAPI.profileUserStatus(userId)
    dispatch(setProfileStatus(response))
}

export const getAddProfileStatus = (status) => async (dispatch) => {
  const response = await userAPI.addProfileStatus(status)
    if(response.resultCode === 0){
      dispatch(setProfileStatus(status))
    }
}

export const getNewAvatar = (photos) => async (dispatch) => {
  const response = await userAPI.addNewAvatar(photos)
    if(response.resultCode === 0){
      dispatch(setNewAvatarSuccess(response.data.photos))
    }
}

export default profileReducer;
