import {UserFilterFormDataType} from "../components/Users/UserForm"
import {ApiResponseType, instance} from "./api"
import {ProfilePhotoType} from "./profile-api"


const userAPI = {
  getUsers(activePage: number, pageCount: number, filter: UserFilterFormDataType) {
    return instance.get<UsersResponseDataType>(`users?page=${activePage}&count=${pageCount}` +
      (filter.term.length === 0 ? '' : `&term=${filter.term}`) +
      (filter.friend === null ? '' : `&friend=${filter.friend}`))
      .then(response => response.data)
  },
  postFollow(userId: number) {
    return instance.post<ApiResponseType>(`follow/${userId}`).then(response => response.data)
  },
  deleteUnFollow(userId: number) {
    return instance.delete<ApiResponseType>(`follow/${userId}`).then(response => response.data)
  }
}

export default userAPI

type UsersResponseDataType = {
  items: Array<UserResponseType>
  Items: UserResponseType
  id: number
  name: string
  status: string
  photos: {
    small: string
    large: string
  }
  followed: boolean
  totalCount: number
  error: string
}

export type UserResponseType = {
  id: number
  name: string
  status: string
  photos: ProfilePhotoType
  followed: boolean
}