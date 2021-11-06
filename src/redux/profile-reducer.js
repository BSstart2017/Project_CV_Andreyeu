const ADD_POST = "ADD-POST"
const NEW_TEXT_POST = "NEW-TEXT-POST"

let defaultState = {
  postData: [
    { id: 1, newText: "dfdggdfgfd", col: 3 },
    { id: 2, newText: "dfg", col: 6 },
    { id: 3, newText: "hi", col: 33 },
    { id: 4, newText: "234", col: 38 },
  ],
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
    default:
      return state
  }
}
 
export const addPostAC = () => ({type : ADD_POST})
export const newTextPostAC = (text) => ({type : NEW_TEXT_POST, newText: text})

export default profileReducer;
