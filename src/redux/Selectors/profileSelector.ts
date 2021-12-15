import { AppStateType } from "../store"

export const getIconsBadgesSelector = (state: AppStateType) => {
    return state.profileReducer.iconsBadges
}

export const getIconsQuestsSelector = (state: AppStateType) => {
    return state.profileReducer.iconsQuests
}

export const getProfileSelector = (state: AppStateType) => {
    return state.profileReducer.profile
}



