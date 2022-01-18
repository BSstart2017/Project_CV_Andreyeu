
import profileReducer, {actions, defaultStateType} from "./profile-reducer";

let state = {
  postData: [
    { id: 1, newText: "My one post", likeCount: 3 },
    { id: 2, newText: "Post number two", likeCount: 6 },
    { id: 3, newText: "hi", likeCount: 33 },
    { id: 4, newText: "lol", likeCount: 38 },
  ],
  profile: null,
  status: ''
} as defaultStateType

it('new post add', () => {
  let action = actions.setAddPostSuccess('testText')
  let newState = profileReducer(state,action)
  expect(newState.postData.length).toBe(5)
  expect(newState.postData[0].newText).toBe('testText')
  expect(newState.postData[0].likeCount).toBe(0)
})

