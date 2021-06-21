import {v1} from "uuid";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

type ActionUsersType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC>
export type UsersDataType = typeof initialState

const initialState = {
     users: [
          {id: v1(), name: 'Ilya', followed: true, photo: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png', location: {country: 'Russia', city: 'Moscow'}},
          {id: v1(), name: 'Andrey', followed: false, photo: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png', location: {country: 'Belarus', city: 'Minsk'}},
          {id: v1(), name: 'Tom', followed: true, photo: 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png', location: {country: 'USA', city: 'New-York'}}
     ]
}

debugger
export const usersReducer = (state: UsersDataType = initialState, action: ActionUsersType): UsersDataType =>{
     debugger
     switch (action.type){
          case FOLLOW:
               debugger
               return {
                    ...state,
                    users: state.users.map(u => {
                         if(u.id === action.userID){
                              return {...u, followed: true}
                         }
                         return u
                    })
               }
          case UNFOLLOW:
               debugger
               return {
                    ...state,
                    users: state.users.map(u => {
                         if(u.id === action.userID){
                             return {...u, followed: false}
                         }
                         return u
                    })
               }
     }
     return state
}


export const followAC = (userID: string) =>{
     return {
          type: FOLLOW,
          userID
     }
}

export const unFollowAC = (userID: string) =>{
     return {
          type: UNFOLLOW,
          userID
     }
}
