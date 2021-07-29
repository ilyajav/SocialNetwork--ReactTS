import axios from "axios";
import {UserType} from "../redux/users-reducer";


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '894be655-7668-4c64-ab04-a70e23a3a596',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<{ items: UserType[], totalCount: number }>(`users?page=${currentPage}&count=${pageSize}`)
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`)
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`)
    },
}

export const profileAPI = {
    userProfile(userID: string){
        return instance.get(`profile/${userID}`)
    },
    userStatus(userID: number){
         return instance.get( `profile/status/${userID}`)
    },
    newUserStatus(status: string){
        debugger
         return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    authUser() {
        return instance.get(`auth/me`)
    },
}
