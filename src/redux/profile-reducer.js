import { userAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const SET_PROFILE_USER = "SET_PROFILE_USER"
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS"

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
    default:
      return state
  }
}
 
export const addPost = (newTextBody) => ({type : ADD_POST, newTextBody})
export const setProfileUser = (profile) => ({type : SET_PROFILE_USER, profile})
export const setProfileStatus = (status) => ({type : SET_PROFILE_STATUS, status})

export const getProfileUser = (userId) => (dispatch) => {
  userAPI.profileUser(userId).then(data=> {
    dispatch(setProfileUser(data))
  })
}

export const getProfileStatus = (userId) => (dispatch) => {
  userAPI.profileUserStatus(userId).then(data=> {
    dispatch(setProfileStatus(data))
  })
}

export const getAddProfileStatus = (status) => (dispatch) => {
  userAPI.addProfileStatus(status).then(data=> {
    if(data.resultCode === 0){
      dispatch(setProfileStatus(status))
    }
  })
}

export default profileReducer;
