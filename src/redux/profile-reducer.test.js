import profileReducer, { addPost } from "./profile-reducer";

let state = {
  postData: [
    { id: 1, newText: "My one post", col: 3 },
    { id: 2, newText: "Post number two", col: 6 },
    { id: 3, newText: "hi", col: 33 },
    { id: 4, newText: "lol", col: 38 },
  ],
  profile: null,
  status: ''
}

it('new post add', () => {
  let action = addPost('testText')
  let newState = profileReducer(state,action)
  expect(newState.postData.length).toBe(5)
  expect(newState.postData[0].newText).toBe('testText')
  expect(newState.postData[0].col).toBe(0)
})
