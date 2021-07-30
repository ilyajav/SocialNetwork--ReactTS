import axios from "axios";
import {UserType} from "../redux/users-reducer";
import {ServerProfileType} from "../redux/profile-reducer";


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '894be655-7668-4c64-ab04-a70e23a3a596',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})

export type CommonResponseType<T = {}> = {
    resultCode: 0,
    fieldsErrors: string[],
    messages: string[],
    data: T,

}

export type AuthDataType = {
        id: number,
        email: string,
        login: string,
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<{ items: UserType[], totalCount: number }>(`users?page=${currentPage}&count=${pageSize}`)
    },
    unFollowUser(id: number) {
        return instance.delete<CommonResponseType>(`follow/${id}`)
    },
    followUser(id: number) {
        return instance.post<CommonResponseType>(`follow/${id}`)
    },
}

export const profileAPI = {
    userProfile(userID: string){
        return instance.get<ServerProfileType>(`profile/${userID}`)
    },
    userStatus(userID: number){
         return instance.get<string>( `profile/status/${userID}`)
    },
    newUserStatus(status: string){
         return instance.put<CommonResponseType>(`profile/status`, {status})
    }
}

export const authAPI = {
    authUser() {
        return instance.get<CommonResponseType<AuthDataType>>(`auth/me`)
    },
}
