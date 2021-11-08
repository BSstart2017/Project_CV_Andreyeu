import { userAPI } from "../api/api"

const ADD_POST = "ADD-POST"
const NEW_TEXT_POST = "NEW-TEXT-POST"
const SET_PROFILE_USER = "SET_PROFILE_USER"

let defaultState = {
  postData: [
    { id: 1, newText: "dfdggdfgfd", col: 3 },
    { id: 2, newText: "dfg", col: 6 },
    { id: 3, newText: "hi", col: 33 },
    { id: 4, newText: "234", col: 38 },
  ],
  profile: null,
  newTextPost: ''
}

const profileReducer = (state = defaultState, action) => {
  switch (action.type){
    case ADD_POST:
      let newItemPost = {
        id: 5, newText: state.newTextPost, col: 0
      }
      return {...state,
        postData: [newItemPost , ...state.postData],
        newTextPost: ''
      }
    case NEW_TEXT_POST:
      return {...state,
        newTextPost: action.newText
      }
    case SET_PROFILE_USER:
      return {...state,
        profile: action.profile
      }
    default:
      return state
  }
}
 
export const addPost = () => ({type : ADD_POST})
export const postTextChange = (newText) => ({type : NEW_TEXT_POST, newText})
export const setProfileUser = (profile) => ({type : SET_PROFILE_USER, profile})

export const getProfileUser = (userId) => (dispatch) => {
  userAPI.profileUser(userId).then(data=> {
    dispatch(setProfileUser(data))
  })
}

export default profileReducer;
