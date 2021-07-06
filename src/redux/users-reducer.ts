
enum ACTION_TYPES {
      FOLLOW = 'FOLLOW',
      UNFOLLOW = 'UNFOLLOW',
      SET_USERS = 'SET-USERS',
}

type ActionUsersType = ReturnType<typeof follow> | ReturnType<typeof unFollow> | ReturnType<typeof setUsers>
export type UsersDataType = typeof initialState

export type UserType = {
     name: string,
     id: number,
     photos: PhotosType,
     status: string,
     followed: boolean,
}

type PhotosType = {
     small: string,
     large: string,
}

const initialState = {
     users: [] as UserType[]
}

export const usersReducer = (state: UsersDataType = initialState, action: ActionUsersType): UsersDataType =>{
     switch (action.type){
          case ACTION_TYPES.FOLLOW:
               return {
                    ...state,
                    users: state.users.map(u => {
                         if(u.id === action.userID){
                              return {...u, followed: true}
                         }
                         return u
                    })
               }
          case ACTION_TYPES.UNFOLLOW:
               return {
                    ...state,
                    users: state.users.map(u => {
                         if(u.id === action.userID){
                             return {...u, followed: false}
                         }
                         return u
                    })
               }
          case ACTION_TYPES.SET_USERS: {
               return {
                    ...state, users: action.users
               }
          }
     }
     return state
}


export const follow = (userID: number) =>{
     return {
          type: ACTION_TYPES.FOLLOW,
          userID,
     } as const
}

export const unFollow = (userID: number) =>{
     return {
          type: ACTION_TYPES.UNFOLLOW,
          userID,
     } as const
}

export const setUsers = (users: UserType[]) =>{
     return{
          type: ACTION_TYPES.SET_USERS,
          users,
     } as const
}
