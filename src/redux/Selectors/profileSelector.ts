import { AppStateType } from "../store"

export const getIconsBadgesSelector = (state: AppStateType) => {
    return state.profileReducer.iconsBadges
}


