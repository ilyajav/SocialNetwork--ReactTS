import {v1} from "uuid";


enum ACTION_TYPES {
    ADD_PROFILE_POST = 'ADD-PROFILE-POST',
    CHANGE_PROFILE_POST = 'CHANGE-PROFILE-POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
}

export type ActionProfileTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof changeProfilePost>
    | ReturnType<typeof setUserProfile>

export type PostsType = {
    id: string;
    message: string;
    likesCount: number;
}

export type ProfileDataType = typeof initialState

const initialState = {
    posts: [
        {id: v1(), message: 'How are you?', likesCount: 5},
        {id: v1(), message: 'Good day', likesCount: 10},
        {id: v1(), message: 'New York', likesCount: 6}
    ],
    newProfileMessageText: '',
    profile: <ServerProfileType> {},
}


export type ServerProfileType = {
    aboutMe: string,
    userid: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: {
        github: string,
        vk: string,
        facebook: string,
        instagram: string,
        twitter: string,
        website: string,
        youtube: string,
        mainLink: string,
    },
    photos: {
        small: string,
        large: string,
    },
}

export const profileReducer = (state: ProfileDataType = initialState, action: ActionProfileTypes): ProfileDataType => {
    switch (action.type) {
        case ACTION_TYPES.ADD_PROFILE_POST:
            const newPost: PostsType = {
                id: v1(),
                message: state.newProfileMessageText,
                likesCount: 7,
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newProfileMessageText: ''
            }
        case ACTION_TYPES.CHANGE_PROFILE_POST:
            return {
                ...state,
                newProfileMessageText: action.newText
            }
        case ACTION_TYPES.SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }

}

export const addPost = () => {
    return {
        type: ACTION_TYPES.ADD_PROFILE_POST,
    } as const
}

export const changeProfilePost = (newText: string) => {
    return {
        type: ACTION_TYPES.CHANGE_PROFILE_POST,
        newText,
    } as const
}

export const setUserProfile = (profile: ServerProfileType) => {
    return {
        type: ACTION_TYPES.SET_USER_PROFILE,
        profile,
    } as const
}
