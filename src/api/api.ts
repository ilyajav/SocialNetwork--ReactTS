import axios from "axios";
import {UserType} from "../redux/users-reducer";


const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '6a2da8d7-69c4-4b3d-9e51-9141873328b1',
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<{ items: UserType[], totalCount: number }>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    authUser() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data
            })
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    userProfile(userID: string){
        return instance.get(`profile/${userID}`)
            .then(response => {
                return response.data
            })
    }
}
