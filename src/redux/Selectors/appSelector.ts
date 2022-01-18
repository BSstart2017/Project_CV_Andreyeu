import { AppStateType } from "../store"

export const getCollapsed = (state: AppStateType) => state.appReducer.collapsed

export const getInitialized = (state: AppStateType) => (state: AppStateType) => state.appReducer.initialized

