import { FormAction, stopSubmit } from "redux-form"
import { ResultCodeEnum } from "../api/api"
import profileApi, { ProfilePhotoType, ProfileResponseDataType } from "../api/profile-api"
import {BaseThunkType, InferActionType } from "./store"

let defaultState = {
  postData: [
    { id: 1, newText: "My one post", likeCount: 3 },
    { id: 2, newText: "Post number two", likeCount: 6 },
    { id: 3, newText: "hi", likeCount: 33 },
    { id: 4, newText: "lol", likeCount: 38 },
  ] as Array<PostDataType>,
  profile: null as null | ProfileResponseDataType,
  status: ''
}

const profileReducer = (state = defaultState, action : ActionType) : defaultStateType=> {
  switch (action.type){
    case "profile/Aliaksandr_Andreyeu/ADD-POST":
      let newItemPost = {
        id: 5, newText: action.newTextBody, likeCount: 0
      }
      return { ...state, postData: [newItemPost , ...state.postData] }
    case "profile/Aliaksandr_Andreyeu/SET_PROFILE_USER":
      return { ...state, profile: action.profile }
    case "profile/Aliaksandr_Andreyeu/SET_PROFILE_STATUS":
      return { ...state, status: action.status }
    case "profile/Aliaksandr_Andreyeu/SET_NEW_AVATAR_SUCCESS":
      return { ...state, profile: {...state.profile, photos: action.photos} as ProfileResponseDataType}
    default:
      return state 
  }
}

export const actions = {
  setAddPostSuccess: (newTextBody : string)=> ({type : "profile/Aliaksandr_Andreyeu/ADD-POST", newTextBody}  as const),
  setProfileUserSuccess: (profile : ProfileResponseDataType)=> ({type : "profile/Aliaksandr_Andreyeu/SET_PROFILE_USER", profile}  as const),
  setProfileStatusSuccess: (status : string)=> ({type : "profile/Aliaksandr_Andreyeu/SET_PROFILE_STATUS", status}  as const),
  setNewAvatarSuccess: (photos : ProfilePhotoType) => ({type :"profile/Aliaksandr_Andreyeu/SET_NEW_AVATAR_SUCCESS", photos} as const)
}

export const getProfileUser = (userId : number) : ThunkType => async (dispatch) => {
  const response = await profileApi.getProfileUser(userId)
    dispatch(actions.setProfileUserSuccess(response))
}

export const getProfileStatus = (userId : number) : ThunkType => async (dispatch) => {
  const response = await profileApi.getProfileUserStatus(userId)
    dispatch(actions.setProfileStatusSuccess(response))
}

export const getAddProfileStatus = (status : string) : ThunkType => async (dispatch) => {
  const response = await profileApi.putProfileStatus(status)
    if(response.resultCode === 0){
      dispatch(actions.setProfileStatusSuccess(status))
    }
}

export const getNewAvatar = (photos : File) : ThunkType => async (dispatch) => {
  const response = await profileApi.putUserAvatar(photos)
    if(response.resultCode === ResultCodeEnum.Success){
      dispatch(actions.setNewAvatarSuccess(response.data.photos))
    }
}

export const getNewContactsEdit = (profile : ProfileResponseDataType) : ThunkType => async (dispatch, getState) => {
  const userId = getState().authReducer.id
  const response = await profileApi.putContactsEdit(profile)
    if(response.resultCode === 0){
      if(userId) dispatch(getProfileUser(userId))
    }else {
       dispatch(stopSubmit("profileContacts", {_error: response.messages[0]}))
       return Promise.reject()
     }
}

export default profileReducer;



type defaultStateType = typeof defaultState
type ActionType = InferActionType<typeof actions>
type ThunkType = BaseThunkType<ActionType | FormAction>

export type PostDataType = {
  id : number
  newText : string
  likeCount : number
}
