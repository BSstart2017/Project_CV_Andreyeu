import {ApiResponseType, instance} from "./api";

const profileApi = {
  getProfileUser(userId: number) {
    return instance.get<ProfileResponseDataType>(`profile/` + userId).then(response => response.data)
  },
  getProfileUserStatus(userId: number) {
    return instance.get<string>(`profile/status/` + userId).then(response => response.data)
  },
  putProfileStatus(status: string) {
    return instance.put<ApiResponseType>(`profile/status/`, {status: status}).then(response => response.data)
  },
  putUserAvatar(photos: File) {
    const formData = new FormData();
    formData.append("image", photos);
    return instance.put<ApiResponseType<PhotosType>>(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => response.data)
  },
  putContactsEdit(profile: ProfileResponseDataType) {
    return instance.put(`profile`, profile).then(response => response.data)
  }
}

export default profileApi

export type ProfileResponseDataType = {
  aboutMe: string
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ProfileContactsDataType
  photos: ProfilePhotoType
}

export type ProfileContactsDataType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}

export type ProfilePhotoType = {
  small: string | null
  large: string | null
}

type PhotosType = {
  photos: ProfilePhotoType
}