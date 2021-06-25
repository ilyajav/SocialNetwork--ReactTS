
const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

type ActionUsersType = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>
export type UsersDataType = typeof initialState


export type UserType = {
     name: string,
     id: number,
     photos: PhotosType
     status: string,
     followed: boolean
}

type PhotosType = {
     small: string
     large: string
}

const initialState = {
     users: [] as UserType[]
}

export const usersReducer = (state: UsersDataType = initialState, action: ActionUsersType): UsersDataType =>{
     switch (action.type){
          case FOLLOW:
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
               return {
                    ...state,
                    users: state.users.map(u => {
                         if(u.id === action.userID){
                             return {...u, followed: false}
                         }
                         return u
                    })
               }
          case SET_USERS: {
               return {
                    ...state, users: action.users
               }
          }
     }
     return state
}


export const followAC = (userID: number) =>{
     return {
          type: FOLLOW,
          userID
     } as const
}

export const unFollowAC = (userID: number) =>{
     return {
          type: UNFOLLOW,
          userID
     } as const
}

export const setUsersAC = (users: UserType[]) =>{
     return{
          type: SET_USERS,
          users
     } as const
}
