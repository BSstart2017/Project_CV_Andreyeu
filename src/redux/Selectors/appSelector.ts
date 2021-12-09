import { AppStateType } from "../store"

export const getCollapsed = (state: AppStateType) => {
    return state.appReducer.collapsed
}


