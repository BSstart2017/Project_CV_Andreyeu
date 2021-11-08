import axios from "axios";


const instance = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers: {"API-KEY" : "69c572f2-d245-45cb-9387-49e54e15a18a"}
})

export const userAPI = {
    getUsers(activePage, pageCount){
        return instance.get(`users?page=${activePage}&count=${pageCount}`)
        .then(response=>response.data)
    },
    follow(userId){
        return instance.post(`follow/${userId}`).then(response=>response.data)
    },
    unFollow(userId){
        return instance.delete(`follow/${userId}`).then(response=>response.data)
    },
    authUser(){
        return instance.get(`auth/me`).then(response=>response.data)
    },
    profileUser(userId){  
        return instance.get(`profile/`+ userId).then(response=>response.data)
    }
}
