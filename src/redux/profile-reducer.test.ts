import profileReducer, {
  actions,
  defaultStateType,
  getAddProfileStatus,
  getNewAvatar,
  getNewContactsEdit,
  getProfileStatus,
  getProfileUser,
  IconsBadgesType,
  PostDataType
} from "./profile-reducer";
import profileApi, {PhotosType, ProfileResponseDataType} from "../api/profile-api";
import {ApiResponseType, ResultCodeEnum} from "../api/api";
import {stopSubmit} from "redux-form";

jest.mock('../api/profile-api')

const profileApiMock = profileApi as jest.Mocked<typeof profileApi>;

const dispatchMock = jest.fn()
const getStateMock = jest.fn()

const resultProfileStatusSuccess: ApiResponseType = {
  resultCode: ResultCodeEnum.Success,
  messages: [],
  data: {}
}
const resultProfileStatusError: ApiResponseType = {
  resultCode: ResultCodeEnum.Error,
  messages: [],
  data: {}
}
const resultNewAvatarSuccess: ApiResponseType<PhotosType> = {
  resultCode: ResultCodeEnum.Success,
  messages: [],
  data: {
    photos: {
      large: "https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200\u0026h=100\u0026c=7qBx8Nl0mJGvLPkBzCBNpg%3D%3D",
      small: "https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200\u0026h=100\u0026c=7qBx8Nl0mJGvLPkBzCBNpg%3D%3D"
    }
  }
}
const resultNewAvatarError: ApiResponseType<PhotosType> = {
  resultCode: ResultCodeEnum.Error,
  messages: [],
  data: {
    photos: {
      large: "https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200\u0026h=100\u0026c=7qBx8Nl0mJGvLPkBzCBNpg%3D%3D",
      small: "https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200\u0026h=100\u0026c=7qBx8Nl0mJGvLPkBzCBNpg%3D%3D"
    }
  }
}
const resultNewContactsEdit: ApiResponseType = {
  resultCode: ResultCodeEnum.Success,
  messages: [],
  data: {}
}
const resultNewContactsEditError: ApiResponseType = {
  resultCode: ResultCodeEnum.Error,
  messages: ['Error'],
  data: {}
}
const resultProfileUser: ProfileResponseDataType = {
    userId: 1,
    aboutMe: 'React',
    photos: {
      large: '',
      small: "https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200\u0026h=100\u0026c=7qBx8Nl0mJGvLPkBzCBNpg%3D%3D"
    },
    fullName: 'Missio',
    lookingForAJob: true,
    lookingForAJobDescription: 'JS',
    contacts: {
      github: '',
      vk: '',
      facebook: '',
      instagram: '',
      twitter: '',
      website: '',
      youtube: '',
      mainLink: ''
    }
}
const avatar = "https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200\u0026h=100\u0026c=7qBx8Nl0mJGvLPkBzCBNpg%3D%3D"
const profile = {
  aboutMe: "React",
  userId: 1,
  lookingForAJob: true,
  lookingForAJobDescription: 'string',
  fullName: 'Missio',
  contacts: {
    github: '',
    vk: '',
    facebook: '',
    instagram: '',
    twitter: '',
    website: '',
    youtube: '',
    mainLink: ''
  },
  photos: {
    small: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`,
    large: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`
  }
}
let state = {
  iconsBadges: [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
      name: 'Bronze User',
      exercise: 'Has posted more than 1 post on their profile',
      requirements: [
        {quests: 'Write an activity stream message 1 time'}
      ]
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Silver-User.png`,
      name: 'Silver User',
      exercise: 'Has posted more than 100 posts on their profile',
      requirements: [
        {quests: 'Write an activity stream message 100 times'}
      ]
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Gold-User.png`,
      name: 'Gold User',
      exercise: 'Has posted more than 500 posts on their profile',
      requirements: [
        {quests: 'Write an activity stream message 500 times'}
      ]
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Platinum-User.png`,
      name: 'Platinum User',
      exercise: 'Has posted more than 1000 posts on their profile',
      requirements: [
        {quests: 'Write an activity stream message 1000 times'}
      ]
    },
    {
      id: 5,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Mightier-Than-Sword.png`,
      name: 'Mightier Than Sword',
      exercise: 'Successfully published at least 10 blog posts',
      requirements: [
        {quests: 'Publish a new post 10 times'}
      ]
    },
    {
      id: 6,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Caffeinatted-Readers.png`,
      name: 'Caffeinated Readers',
      exercise: 'Received more than 500 daily visits on any post',
      requirements: [
        {quests: 'Daily visit any post 500 times'}
      ]
    },
    {
      id: 7,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Phantom-Poster.png`,
      name: 'Phantom Poster',
      exercise: 'Deleted more than 20 activity stream posts',
      requirements: [
        {quests: 'Remove an activity stream message 20 times'}
      ]
    },
    {
      id: 8,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Peoples-Person.png`,
      name: 'People’s Person',
      exercise: 'Has accepted at least 30 friend requests',
      requirements: [
        {quests: 'Accept a friendship request 30 times'}
      ]
    },
    {
      id: 9,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Universe-Explorer.png`,
      name: 'Universe Explorer',
      exercise: 'Joined at least 20 different groups',
      requirements: [
        {quests: 'Join a group 20 times'}
      ]
    },
    {
      id: 10,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Globe-Trotter.png`,
      name: 'Globe Trotter',
      exercise: 'Has joined at least 10 different groups',
      requirements: [
        {quests: 'Join a group 10 times'}
      ]
    },
    {
      id: 11,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Interests-Cultivator.png`,
      name: 'Interests Cultivator',
      exercise: 'Has successfully created 5 or more groups',
      requirements: [
        {quests: 'Create a group 5 times'}
      ]
    },
    {
      id: 12,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Ruler-of-Masses.png`,
      name: 'Ruler of Masses',
      exercise: 'Was promoted to moderator or admin of 5 groups',
      requirements: [
        {quests: 'Promoted to group mod/admin 5 times'}
      ]
    },
    {
      id: 13,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/The-Warrior.png`,
      name: 'The Warrior',
      exercise: 'Helped the team enforce the community rules',
      requirements: [
        {quests: null}
      ]
    },
    {
      id: 14,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Crazy-Scientist.png`,
      name: 'Crazy Scientist',
      exercise: 'Helped us beta test new awesome features',
      requirements: [
        {quests: null}
      ]
    },
    {
      id: 15,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Quest-Conqueror.png`,
      name: 'Quest Conqueror',
      exercise: 'Successfully completed 100% of all the quests',
      requirements: [
        {quests: 'Unlock all quest 1 time'}
      ]
    },
    {
      id: 16,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Ranks-Overlord.png`,
      name: 'Ranks Overlord',
      exercise: 'Reached the highest rank available',
      requirements: [
        {quests: 'Reach Rank Almighty'}
      ]
    },
    {
      id: 17,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Gold-Amasser.png`,
      name: 'Gold Amasser',
      exercise: 'Has reached a balance of 400 gold credits',
      requirements: [
        {quests: 'Reach a balance of 400 Gold Credits'}
      ]
    },
    {
      id: 18,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Gem-Accumulator.png`,
      name: 'Gem Accumulator',
      exercise: 'Has reached a balance of 400 gem credits',
      requirements: [
        {quests: 'Reach a balance of 400 Gem Credits'}
      ]
    },
    {
      id: 19,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Emerald-Collector.png`,
      name: 'Emerald Collector',
      exercise: 'Has reached a balance of 400 emerald credits',
      requirements: [
        {quests: 'Reach a balance of 400 Points'}
      ]
    },
    {
      id: 20,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Credits-Tycoon.png`,
      name: 'Credits Tycoon',
      exercise: 'Earned at least 800 of each of the three credits',
      requirements: [
        {quests: 'Reach a balance of 800 Gold Credits'},
        {quests: 'Reach a balance of 800 Gem Credits'},
        {quests: 'Reach a balance of 800 Emerald Credits'}
      ]
    },
    {
      id: 21,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-Cup.png`,
      name: 'Bronze Cup',
      exercise: 'Won third place on a verified community competition',
      requirements: [
        {quests: null}
      ]
    },
    {
      id: 22,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Silver-Cup.png`,
      name: 'Silver Cup',
      exercise: 'Won second place on a verified community competition',
      requirements: [
        {quests: null}
      ]
    },
    {
      id: 23,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Gold-Cup.png`,
      name: 'Gold Cup',
      exercise: 'Won first place on a verified community competition',
      requirements: [
        {quests: null}
      ]
    },
    {
      id: 24,
      img: `${process.env.PUBLIC_URL}/assets/images/Badges/Platinum-Cup.png`,
      name: 'Platinum Cup',
      exercise: 'Won an official Social Network competition',
      requirements: [
        {quests: null}
      ]
    }
  ] as Array<IconsBadgesType>,
  postData: [
    {id: 1, newText: "My one post", likeCount: 3},
    {id: 2, newText: "Post number two", likeCount: 6},
    {id: 3, newText: "hi", likeCount: 33},
    {id: 4, newText: "lol", likeCount: 38},
    {id: 5, newText: "My one post", likeCount: 3},
    {id: 6, newText: "Post number two", likeCount: 6},
    {id: 7, newText: "hi", likeCount: 33},
    {id: 8, newText: "lol", likeCount: 38},
    {id: 9, newText: "My one post", likeCount: 3},
    {id: 10, newText: "Post number two", likeCount: 6},
    {id: 11, newText: "hi", likeCount: 33},
    {id: 12, newText: "lol", likeCount: 38},
    {id: 13, newText: "Post number two", likeCount: 6},
    {id: 14, newText: "hi", likeCount: 33},
    {id: 15, newText: "lol", likeCount: 38},
    {id: 16, newText: "Post number two", likeCount: 6},
    {id: 17, newText: "hi", likeCount: 33},
    {id: 18, newText: "lol", likeCount: 38},
    {id: 19, newText: "Post number two", likeCount: 6},
    {id: 20, newText: "hi", likeCount: 33},
    {id: 21, newText: "lol", likeCount: 38}
  ] as Array<PostDataType>,
  profile: null as null | ProfileResponseDataType,
  iconsQuests: [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/assets/images/Quests/Gold-Quest-Medal.png`,
      name: 'Quest Conqueror',
      exercise: 'Complete 100% of all quests at least once',
      requirements: [
        {quests: 'Unlock all quests 1 time'}
      ]
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/assets/images/Quests/Red-Quest-Medal.png`,
      name: 'Hear Me Out',
      exercise: 'Posted more than 10 profile activities in one day',
      requirements: [
        {quests: 'Write an activity stream message 10 times (limited to 1 per day)'}
      ]
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/assets/images/Quests/Purple-Quest-Medal.png`,
      name: 'Posting Machine',
      exercise: 'Posted more than 20 profile activities in one day',
      requirements: [
        {quests: 'Write an activity stream message 20 times (limited to 1 per day)'}
      ]
    },
    {
      id: 4,
      img: `${process.env.PUBLIC_URL}/assets/images/Quests/Cyan-Quest-Medal.png`,
      name: 'Let’s Talk!',
      exercise: 'Successfully sent or replied to 5 private messages',
      requirements: [
        {quests: 'Send/Reply to a private message 5 times'}
      ]
    },
    {
      id: 5,
      img: `${process.env.PUBLIC_URL}/assets/images/Quests/Blue-Quest-Medal.png`,
      name: 'Making Friends',
      exercise: 'Successfully sent 5 friend request',
      requirements: [
        {quests: 'Send a friendship request 5 times'}
      ]
    },
    {
      id: 6,
      img: `${process.env.PUBLIC_URL}/assets/images/Quests/Pink-Quest-Medal.png`,
      name: 'BestSeller Post',
      exercise: 'Received more than 100 total visits on any post',
      requirements: [
        {quests: 'Get visits on any post 100 times'}
      ]
    },
    {
      id: 7,
      img: `${process.env.PUBLIC_URL}/assets/images/Quests/Green-Quest-Medal.png`,
      name: 'Friendly User',
      exercise: 'Successfully got 10 friend request accepted',
      requirements: [
        {quests: 'Get a friendship request accepted 10 times'}
      ]
    },
    {
      id: 8,
      img: `${process.env.PUBLIC_URL}/assets/images/Quests/Orange-Quest-Medal.png`,
      name: 'For The Community',
      exercise: 'Posted more than 40 group activities',
      requirements: [
        {quests: 'Write a group activity stream message 40 times'}
      ]
    },
    {
      id: 9,
      img: `${process.env.PUBLIC_URL}/assets/images/Quests/quest-open.png`,
      name: 'VIP Pass',
      exercise: 'Got successfully accepted in a private group',
      requirements: [
        {quests: 'Get accepted on a private group 1 time'}
      ]
    },
    {
      id: 10,
      img: `${process.env.PUBLIC_URL}/assets/images/Quests/quests-icon.png`,
      name: 'I Have The Power',
      exercise: 'Was promoted to group moderator or admin',
      requirements: [
        {quests: 'Promoted to group moderator/administrator 1 time'}
      ]
    },
    {
      id: 11,
      img: `${process.env.PUBLIC_URL}/assets/images/Quests/Silver-Quest-Medal.png`,
      name: 'The Publisher',
      exercise: 'Successfully published a new blog post',
      requirements: [
        {quests: 'Publish a new post 1 time'}
      ]
    },
    {
      id: 12,
      img: `${process.env.PUBLIC_URL}/assets/images/Quests/Light-Blue-Quest-Medal.png`,
      name: 'Popular Writer',
      exercise: 'Received more than 50 daily visits on any post',
      requirements: [
        {quests: 'Daily visit any post 50 times'}
      ]
    }
  ] as Array<IconsBadgesType>,
  status: '',
  newTextBody: ''
} as defaultStateType
const file = new File(['hello.png'], 'hello.png', {type: 'image/png'})

describe('profileReducer actions',()=>{
  it('profileReducer actions.setAddPostSuccess', () => {
    let action = actions.setAddPostSuccess('testText')
    let newState = profileReducer(state,action)
    expect(newState.postData.length).toBe(22)
    expect(newState.postData[0].newText).toBe('testText')
    expect(newState.postData[0].likeCount).toBe(0)
  })
  it('profileReducer actions.setNewAvatarSuccess', () => {
    let action = actions.setNewAvatarSuccess({large:avatar,
    small: avatar})
    let newState = profileReducer(state,action)
    expect(newState.profile?.photos.small).toBe(avatar)
    expect(newState.profile?.photos.large).toBe(avatar)
  })
  it('profileReducer actions.setProfileStatusSuccess', () => {
    let action = actions.setProfileStatusSuccess('TestStatus')
    let newState = profileReducer(state,action)
    expect(newState.status).toBe('TestStatus')
  })
  it('profileReducer actions.setProfileUserSuccess', () => {
    let action = actions.setProfileUserSuccess(profile)
    let newState = profileReducer(state,action)
    expect(newState.profile?.aboutMe).toBe("React")
  })
  it('profileReducer actions.setNewMessageSuccess', () => {
    let action = actions.setNewMessageSuccess('TestMessage')
    let newState = profileReducer(state,action)
    expect(newState.newTextBody).toBe('TestMessage')
  })
})
describe ('profileReducer thunk', ()=>{
  it('profileReducer getProfileUser', async () =>{
      profileApiMock.getProfileUser.mockReturnValue(Promise.resolve(resultProfileUser))
      const thunk = getProfileUser(1)
      await thunk(dispatchMock, getStateMock, {})
      expect(dispatchMock).toBeCalledTimes(1)
      expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setProfileUserSuccess(resultProfileUser))
  })
  it('profileReducer getProfileStatus', async () =>{
      profileApiMock.getProfileUserStatus.mockReturnValue(Promise.resolve('StatusTest'))
      const thunk = getProfileStatus(1)
      await thunk(dispatchMock, getStateMock, {})
      expect(dispatchMock).toBeCalledTimes(1)
      expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setProfileStatusSuccess('StatusTest'))
  })
  describe('profileReducer getAddProfileStatus', ()=>{
    const thunk = getAddProfileStatus('StatusTest')
    it('profileReducer getAddProfileStatus success', async () =>{
      profileApiMock.putProfileStatus.mockReturnValue(Promise.resolve(resultProfileStatusSuccess))
      await thunk(dispatchMock, getStateMock, {})
      expect(dispatchMock).toBeCalledTimes(1)
      expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setProfileStatusSuccess('StatusTest'))
    })
    it('profileReducer getAddProfileStatus error', async () =>{
      profileApiMock.putProfileStatus.mockReturnValue(Promise.resolve(resultProfileStatusError))
      await thunk(dispatchMock, getStateMock, {})
      expect(dispatchMock).toBeCalledTimes(0)
    })
  })
  describe('profileReducer getNewAvatar',()=>{
    const thunk = getNewAvatar(file)
    it('profileReducer getNewAvatar success', async () =>{
      profileApiMock.putUserAvatar.mockReturnValue(Promise.resolve(resultNewAvatarSuccess))
      await thunk(dispatchMock, getStateMock, {})
      expect(dispatchMock).toBeCalledTimes(1)
      expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setNewAvatarSuccess(resultNewAvatarSuccess.data.photos))
    })
    it('profileReducer getNewAvatar error', async () =>{
      profileApiMock.putUserAvatar.mockReturnValue(Promise.resolve(resultNewAvatarError))
      await thunk(dispatchMock, getStateMock, {})
      expect(dispatchMock).toBeCalledTimes(0)
    })
  })
  describe('profileReducer',()=>{
    const thunkProfileUser = getProfileUser(1)
    const thunk = getNewContactsEdit(profile)
    it('profileReducer getNewContactsEdit success + userID === null', async () =>{
      profileApiMock.putContactsEdit.mockReturnValue(Promise.resolve(resultNewContactsEdit))
      profileApiMock.getProfileUser.mockReturnValue(Promise.resolve(resultProfileUser))
      const stored = {
        "authReducer": {
          "id": null,
          "login": null,
          "email": null,
          "isLogin": false,
          "captcha": null
        }
      }
      await thunk(dispatchMock, getStateMock.mockReturnValue(stored), {})
      await thunkProfileUser(dispatchMock, getStateMock.mockReturnValue(stored), {})
      expect(dispatchMock).toBeCalledTimes(1)
      expect(getStateMock).toBeCalledTimes(1)
      expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.setProfileUserSuccess(resultProfileUser))
    })
    it('profileReducer getNewContactsEdit error', async () =>{
      const stored = {
        "authReducer": {
          "id": 1,
          "login": null,
          "email": null,
          "isLogin": false,
          "captcha": null
        }
      }
      profileApiMock.putContactsEdit.mockReturnValue(Promise.resolve(resultNewContactsEditError))
      await thunk(dispatchMock, getStateMock.mockReturnValue(stored), {})
      expect(dispatchMock).toBeCalledTimes(1)
      expect(getStateMock).toBeCalledTimes(1)
      expect(dispatchMock).toHaveBeenNthCalledWith(1, stopSubmit("profileContacts", {_error: 'Error'}))
    })
    it('profileReducer getNewContactsEdit success + userID === 1', async () =>{
      const stored = {
        "authReducer": {
          "id": 1,
          "login": null,
          "email": null,
          "isLogin": false,
          "captcha": null
        }
      }
      profileApiMock.putContactsEdit.mockReturnValue(Promise.resolve(resultNewContactsEdit))
      await thunk(dispatchMock, getStateMock.mockReturnValue(stored), {})
      profileApiMock.getProfileUser.mockReturnValue(Promise.resolve(resultProfileUser))
      await thunkProfileUser(dispatchMock, getStateMock, {})
      expect(dispatchMock).toBeCalledTimes(2)
      expect(getStateMock).toBeCalledTimes(1)
      expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.setProfileUserSuccess(resultProfileUser))
    })
  })
})


