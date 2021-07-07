enum ACTION_TYPES {
    FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT',
}

type ActionUsersType =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setUsersTotalCount>

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
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

export const usersReducer = (state: UsersDataType = initialState, action: ActionUsersType): UsersDataType => {
    switch (action.type) {
        case ACTION_TYPES.FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case ACTION_TYPES.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case ACTION_TYPES.SET_USERS: {
            debugger
            return {
                ...state, users: action.users
            }
        }
        case ACTION_TYPES.SET_CURRENT_PAGE: {
            debugger
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case ACTION_TYPES.SET_USERS_TOTAL_COUNT: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
    }
    return state
}


export const follow = (userID: number) => {
    return {
        type: ACTION_TYPES.FOLLOW,
        userID,
    } as const
}

export const unFollow = (userID: number) => {
    return {
        type: ACTION_TYPES.UNFOLLOW,
        userID,
    } as const
}

export const setUsers = (users: UserType[]) => {
    debugger
    return {
        type: ACTION_TYPES.SET_USERS,
        users,
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: ACTION_TYPES.SET_CURRENT_PAGE,
        currentPage,
    } as const
}

export const setUsersTotalCount = (totalUsersCount: number) => {
    return {
        type: ACTION_TYPES.SET_USERS_TOTAL_COUNT,
        totalUsersCount,
    } as const
}
