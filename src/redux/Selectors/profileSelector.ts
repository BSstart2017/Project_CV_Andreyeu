import { AppStateType } from "../store"

export const getIconsBadgesSelector = (state: AppStateType) => state.profileReducer.iconsBadges
export const getIconsQuestsSelector = (state: AppStateType) => state.profileReducer.iconsQuests
export const getProfileSelector = (state: AppStateType) => state.profileReducer.profile
export const getProfileStatusSelector = (state: AppStateType) => state.profileReducer.status
export const getPostDataSelector = (state: AppStateType) => state.profileReducer.postData
export const getNewTextBodySelector = (state: AppStateType) => state.profileReducer.newTextBody




