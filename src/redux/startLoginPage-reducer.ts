import {InferActionType} from "./store"

let defaultState = {
  cardsInfo: [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/01-1.png`,
      headerText: 'BuddyPress Powered',
      footerText: 'We took advantage and expanded the Buddypress plugin with reactions, shares, media, and much more!'
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/02-1.png`,
      headerText: 'Super Gamification!',
      footerText: 'We created a full gamification experience with badges, quests, credits and ranks to create an awesome experience!'
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/03-1.png`,
      headerText: 'Incredible Design',
      footerText: 'All pages are carefully crafted to fit all you may need! Also, we included lots of illustrations and elements PSD’s!'
    }
  ],
  carouselItems: [
    {id: 1 , img : `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`},
    {id: 2 , img : `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S02-1-1024x724.png`},
    {id: 3 , img : `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S03-1-1024x724.png`},
    {id: 4 , img : `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S04-1-1024x724.png`}
  ],
  contentImgItems: [
    {
      id: 1, img: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/F01-1.png`, headerTextTop: 'Incredible Community',
      headerTextBottom: 'Pages and Features!',
      text: `Powered by BuddyPress, the theme has super complete profile pages with a sleek design, info boxes to
      show things like your gamification earnings or friends, and a slider for easier access. You’ll also find other
      community pages, like newsfeed, members and groups directory and more!. You can also create public and private groups in order
      to find people that share your same interests! We also created an account hub so you can easily manage lots of stuff, 
      like groups creation, groups management, avatar and cover upload, main profile info, email settings and much more!`,
      position: 'right'
    },
    {
      id: 2, img: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/F02-1.png`, headerTextTop: 'Have Fun With the',
      headerTextBottom: 'Gamification System!',
      text: `Using GamiPress Achievements, Credits, and Ranks features, we built a super complete gamification system that 
    has badges, quests, ranks and credits. To link all to the overall design, we created widgets for the profiles, credits 
    counters for the top menu and progress bars for the avatars, among other things!. Inside the Illustrations folder, 
    you’ll find PSD files with lots of badge, quests, ranks and credits designs so you can have fun choosing the ones you 
    like the most! Also, they are all made with PS Vectors so it’s easier to customize or even create new ones!`,
      position: 'left'
    },
    {
      id: 3, img: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/F03-1.png`, headerTextTop: 'Connect with People',
      headerTextBottom: 'In the Forums!',
      text: `The theme has a bbPress forum integration so you can easily create awesome forums with images, subforums and 
    topics to share interests with the community! We styled it to make it look like the original design (all icons are 
    included in the pack!) and also added some new stuff, like the tags, voices and user widgets at the side of the topic 
    replies. This integration also has complete user’s profile forum stats and groups integration so you can link forums 
    to your group!`, position: 'right'
    },
    {
      id: 4, img: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/F04-1.png`, headerTextTop: 'Incredible Front-End',
      headerTextBottom: 'Account Hub!',
      text: `Once users are logged in. when they click the little cogwheel at the top right corner, they will be able to 
    access all the author hub sections! In here they will be able to change profile and account info, like avatar and cover, 
    email settings, password, social networks and much more!! You’ll also find a groups dedicated section where you’ll be 
    able to manage and create groups, check and promote members (to for example, mods and admins) send invitations and manage 
    the private groups requests!`, position: 'left'
    }
  ]
}

const startLoginPageReducer = (state = defaultState, action: ActionType): initializeStateType => {
  switch (action.type) {
    case "startLoginPageReducer/Aliaksandr_Andreyeu/SET_CARD" :
      return {
        ...state,
        cardsInfo: [...state.cardsInfo, action.newCard]
      }
    case "startLoginPageReducer/Aliaksandr_Andreyeu/SET_CAROUSEL_ITEM" :
      return {
        ...state,
        carouselItems: [...state.carouselItems, action.newItem]
      }
    case "startLoginPageReducer/Aliaksandr_Andreyeu/SET_CONTENT_IMG_ITEM" :
      return {
        ...state,
        contentImgItems: [...state.contentImgItems, action.newItem]
      }
    default:
      return state
  }
}

export const actions = {
  setNewCard: (newCard: CardType) => ({type: 'startLoginPageReducer/Aliaksandr_Andreyeu/SET_CARD', newCard} as const),
  setNewCarouselItems: (newItem: CarouselItemType) => ({
    type: 'startLoginPageReducer/Aliaksandr_Andreyeu/SET_CAROUSEL_ITEM',
    newItem
  } as const),
  setNewContentImgItems: (newItem: ContentImgItemType) => ({
    type: 'startLoginPageReducer/Aliaksandr_Andreyeu/SET_CONTENT_IMG_ITEM',
    newItem
  } as const)
}


export default startLoginPageReducer;

type ActionType = InferActionType<typeof actions>
type initializeStateType = typeof defaultState
export type CardType = {
  id: number
  img: string
  headerText: string
  footerText: string
}

export type CarouselItemType = {
  id: number
  img: string
}

export type ContentImgItemType = {
  id: number
  img: string
  headerTextTop: string
  headerTextBottom: string
  text: string
  position: string
}