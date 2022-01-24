import { AppStateType } from "../store"

export const getCardsInfo = (state: AppStateType) => state.startLoginPageReducer.cardsInfo
export const getCarouselItems = (state: AppStateType) => state.startLoginPageReducer.carouselItems
export const getContentImgItems = (state: AppStateType) => state.startLoginPageReducer.contentImgItems
