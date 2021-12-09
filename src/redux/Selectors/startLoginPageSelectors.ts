import { AppStateType } from "../store"

export const getCardsInfo = (state: AppStateType) => {
  return state.startLoginPageReducer.cardsInfo
}

export const getCarouselItems = (state: AppStateType) => {
  return state.startLoginPageReducer.carouselItems
}

export const getContentImgItems = (state: AppStateType) => {
  return state.startLoginPageReducer.contentImgItems
}